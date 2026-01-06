import { $Enums } from '@db/client'
import { OrganizationsModule } from '@core/modules/orders/organizations/organizations.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'

const camelize = (input: unknown): any => {
  if (Array.isArray(input)) {
    return input.map(camelize)
  }
  if (input && typeof input === 'object') {
    return Object.entries(input as Record<string, unknown>).reduce<Record<string, unknown>>(
      (acc, [key, value]) => {
        const camelKey = key.replace(/_([a-z])/g, (_, char: string) => char.toUpperCase())
        acc[camelKey] = camelize(value)
        return acc
      },
      {},
    )
  }
  return input
}

const createOrganizationPayload = (overrides: Record<string, unknown> = {}) => {
  const unique = Math.random().toString(36).slice(2, 8)
  return {
    orgName: `Org ${unique}`,
    orgType: 'Clinic',
    orgSpecialty: 'Oncology',
    orgAddress: '123 Health Ave',
    orgCity: 'Austin',
    orgState: 'TX',
    orgZip: '73301',
    ...overrides,
  }
}

const createOrganizationViaApi = async (
  proxy: ReturnType<typeof createE2EApp>,
  overrides: Record<string, unknown> = {},
) => {
  const payload = createOrganizationPayload(overrides)
  const response = await proxy.app.inject({
    method: 'POST',
    url: '/organizations',
    body: payload,
  })

  expect(response.statusCode).toBe(201)
  const body = camelize(response.json())
  return { organization: body, payload }
}

const createTestCatalog = async () => {
  const unique = Math.random().toString(36).slice(2, 8)
  const lab = await prisma.lab.create({
    data: {
      labName: `Lab ${unique}`,
      labCode: unique.slice(0, 2),
    },
  })

  return prisma.testCatalog.create({
    data: {
      labId: lab.id,
      casandraTestId: `CAS-${unique}`,
      testName: `Catalog Test ${unique}`,
      status: $Enums.TestCatalogStatus.PUBLISHED,
    },
  })
}

const createProvider = async () => {
  const unique = Math.random().toString(36).slice(2, 8)
  return prisma.provider.create({
    data: {
      firstName: `Provider${unique}`,
      lastName: 'Associate',
      npi: `NPI${unique}`,
      email: `provider_${unique}@example.com`,
    },
  })
}

const createLabOrder = async (organizationId: string) => {
  const patient = await prisma.patient.create({
    data: {
      firstName: 'Order',
      lastName: 'Patient',
    },
  })

  const provider = await prisma.provider.create({
    data: {
      firstName: 'Order',
      lastName: 'Doctor',
      email: 'order_doctor@example.com',
    },
  })

  const test = await createTestCatalog()
  const version = await prisma.testCatalogVersion.create({
    data: {
      testId: test.id,
      versionNumber: 1,
      status: $Enums.TestCatalogVersionStatus.PUBLISHED,
    },
  })
  const configuration = await prisma.testCatalogConfiguration.create({
    data: {
      testId: test.id,
      versionId: version.id,
      configurationName: 'Default',
      versionNumber: 1,
      isActive: true,
      type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
      dimension: $Enums.VariantDimension.FAMILY_STRUCTURE,
      dimensionValue: 'NONE',
    },
  })

  const labOrder = await prisma.labOrder.create({
    data: {
      organizationId,
      patientId: patient.id,
      orderingProviderId: provider.id,
      orderDate: new Date(),
    },
  })

  await prisma.labOrderTest.create({
    data: {
      labOrderId: labOrder.id,
      testVersionId: version.id,
      testConfigurationId: configuration.id,
    },
  })

  return labOrder
}

describe('ROUTE /organizations', () => {
  const proxy = createE2EApp({
    imports: [OrganizationsModule],
  })

  it('POST /organizations should create an organization', async () => {
    const { organization, payload } = await createOrganizationViaApi(proxy)
    expect(organization.orgName).toBe(payload.orgName)
    expect(typeof organization.id).toBe('string')
  })

  it('GET /organizations should list organizations', async () => {
    const { organization } = await createOrganizationViaApi(proxy, { orgName: 'Research Org' })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/organizations',
      query: {
        search: 'Research',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: organization.id,
          orgName: organization.orgName,
        }),
      ]),
    )
  })

  it('GET /organizations/facilities should list facilities scoped to parent', async () => {
    const { organization: parent } = await createOrganizationViaApi(proxy, {
      orgName: 'Parent Org',
    })
    const { organization: facility } = await createOrganizationViaApi(proxy, {
      orgName: 'Child Facility',
      parentId: parent.id,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/organizations/facilities',
      query: {
        parentId: parent.id,
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: facility.id,
          orgName: facility.orgName,
        }),
      ]),
    )
  })

  it('GET /organizations/facilities/:facilityId should return facility detail', async () => {
    const { organization: facility } = await createOrganizationViaApi(proxy, {
      orgName: 'Standalone Facility',
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/organizations/facilities/${facility.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.id).toBe(facility.id)
  })

  it('PATCH /organizations/:organizationId should update organization fields', async () => {
    const { organization } = await createOrganizationViaApi(proxy, {
      orgName: 'Update Target',
      orgSpecialty: 'Pathology',
    })

    const response = await proxy.app.inject({
      method: 'PATCH',
      url: `/organizations/${organization.id}`,
      body: {
        orgName: 'Updated Org Name',
        orgSpecialty: 'Genetics',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.orgName).toBe('Updated Org Name')
    expect(body.orgSpecialty).toBe('Genetics')
  })

  it('GET /organizations/:organizationId/users should list organization users', async () => {
    const { organization } = await createOrganizationViaApi(proxy)
    const user = await prisma.user.create({
      data: {
        email: 'org_user@example.com',
        password: 'hashed',
      },
    })

    await prisma.userIdentity.create({
      data: {
        provider: 'okta',
        issuer: 'https://issuer.example.com',
        subject: 'user-123',
        userId: user.id,
        orgId: organization.id,
      },
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/organizations/${organization.id}/users`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'org_user@example.com',
        }),
      ]),
    )
  })

  it('GET /organizations/:organizationId/tests should list owned favorites', async () => {
    const { organization } = await createOrganizationViaApi(proxy)
    const test = await createTestCatalog()

    await prisma.organizationFavoriteTest.create({
      data: {
        organizationId: organization.id,
        testId: test.id,
      },
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/organizations/${organization.id}/tests`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.owned).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          testId: test.id,
          casandraTestId: test.casandraTestId,
        }),
      ]),
    )
  })

  it('POST /organizations/:organizationId/tests should add favorite test', async () => {
    const { organization } = await createOrganizationViaApi(proxy)
    const test = await createTestCatalog()

    const response = await proxy.app.inject({
      method: 'POST',
      url: `/organizations/${organization.id}/tests`,
      body: {
        testId: test.id,
      },
    })

    expect(response.statusCode).toBe(201)
    const body = camelize(response.json())
    expect(body.testId).toBe(test.id)
    expect(body.casandraTestId).toBe(test.casandraTestId)
  })

  it('GET /organizations/:organizationId/lab-orders should surface organization results', async () => {
    const { organization } = await createOrganizationViaApi(proxy)
    await createLabOrder(organization.id)

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/organizations/${organization.id}/lab-orders`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.items.length).toBeGreaterThanOrEqual(1)
  })

  it('GET /organizations/:organizationId/ancestry should return hierarchy', async () => {
    const { organization: root } = await createOrganizationViaApi(proxy, { orgName: 'Root Org' })
    const { organization: child } = await createOrganizationViaApi(proxy, {
      orgName: 'Child Org',
      parentId: root.id,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/organizations/${child.id}/ancestry`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: root.id }),
        expect.objectContaining({ id: child.id }),
      ]),
    )
  })

  it('POST /organizations/:organizationId/providers should associate a provider', async () => {
    const { organization } = await createOrganizationViaApi(proxy)
    const provider = await createProvider()

    const response = await proxy.app.inject({
      method: 'POST',
      url: `/organizations/${organization.id}/providers`,
      body: {
        providerId: provider.id,
      },
    })

    expect(response.statusCode).toBe(201)
    const body = camelize(response.json())
    expect(body.id).toBe(provider.id)
    const link = await prisma.providerOrganization.findFirst({
      where: { providerId: provider.id, organizationId: organization.id },
    })
    expect(link).not.toBeNull()
  })
})
