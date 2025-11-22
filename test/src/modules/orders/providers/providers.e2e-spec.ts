import { $Enums } from '@db/client'
import { ProvidersModule } from '@core/modules/orders/providers/providers.module'
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

const createProviderPayload = (overrides: Record<string, unknown> = {}) => {
  const unique = Math.random().toString(36).slice(2, 8)
  return {
    firstName: `Greg${unique}`,
    lastName: 'House',
    name: `Dr. Greg${unique} House`,
    email: `provider_${unique}@example.com`,
    npi: `NPI${unique}`,
    specialty: 'Oncology',
    providerType: 'Physician',
    credentials: 'MD',
    affiliation: 'General Hospital',
    aboutme: 'Seasoned oncologist',
    proceduresAndResearch: 'Clinical trials',
    specialInterests: 'Rare diseases',
    gender: 'male',
    href: 'https://example.com/provider',
    ...overrides,
  }
}

const createProviderViaApi = async (
  proxy: ReturnType<typeof createE2EApp>,
  overrides: Record<string, unknown> = {},
) => {
  const payload = createProviderPayload(overrides)
  const response = await proxy.app.inject({
    method: 'POST',
    url: '/providers',
    body: payload,
  })

  expect(response.statusCode).toBe(201)
  const body = camelize(response.json())
  return { provider: body, payload }
}

const createOrganization = async () => {
  const unique = Math.random().toString(36).slice(2, 8)
  return prisma.organization.create({
    data: {
      orgName: `Org ${unique}`,
      orgAddress: '123 Medical Way',
      orgCity: 'Austin',
      orgState: 'TX',
      orgZip: '73301',
    },
  })
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

describe('ROUTE /providers', () => {
  const proxy = createE2EApp({
    imports: [ProvidersModule],
  })

  it('POST /providers should create a provider', async () => {
    const { provider, payload } = await createProviderViaApi(proxy)

    expect(provider.firstName).toBe(payload.firstName)
    expect(provider.email).toBe(payload.email)
    expect(typeof provider.createdAt).toBe('string')
  })

  it('GET /providers should list providers', async () => {
    await createProviderViaApi(proxy, { firstName: 'Dana' })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/providers',
      query: { search: 'Dana' },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          firstName: 'Dana',
        }),
      ]),
    )
    expect(body.totalCount).toBeGreaterThanOrEqual(1)
  })

  it('GET /providers/:providerId should return detail', async () => {
    const { provider } = await createProviderViaApi(proxy)

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/providers/${provider.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.id).toBe(provider.id)
    expect(body.npi).toBe(provider.npi)
  })

  it('PUT /providers/:providerId should update provider data', async () => {
    const { provider } = await createProviderViaApi(proxy)

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/providers/${provider.id}`,
      body: {
        firstName: 'Updated',
        specialty: 'Pathology',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.firstName).toBe('Updated')
    expect(body.specialty).toBe('Pathology')
  })

  it('GET /providers/:providerId/organizations should list linked organizations', async () => {
    const { provider } = await createProviderViaApi(proxy)
    const organization = await createOrganization()

    await prisma.providerOrganization.create({
      data: {
        providerId: provider.id,
        organizationId: organization.id,
        orgName: organization.orgName,
      },
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/providers/${provider.id}/organizations`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: organization.id,
          orgName: organization.orgName,
        }),
      ]),
    )
  })

  it('GET /providers/:providerId/education should list education records', async () => {
    const { provider } = await createProviderViaApi(proxy)

    const education = await prisma.providerEducation.create({
      data: {
        providerId: provider.id,
        name: 'Medical School',
        educationType: 'MD',
      },
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/providers/${provider.id}/education`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: education.id,
          name: 'Medical School',
        }),
      ]),
    )
  })

  it('GET /providers/:providerId/favorite-tests should list favorites', async () => {
    const { provider } = await createProviderViaApi(proxy)
    const test = await createTestCatalog()

    await prisma.providerFavoriteTest.create({
      data: {
        providerId: provider.id,
        testId: test.id,
      },
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/providers/${provider.id}/favorite-tests`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          testId: test.id,
          casandraTestId: test.casandraTestId,
          testName: test.testName,
        }),
      ]),
    )
  })

  it('POST /providers/:providerId/favorite-tests should add favorite', async () => {
    const { provider } = await createProviderViaApi(proxy)
    const test = await createTestCatalog()

    const response = await proxy.app.inject({
      method: 'POST',
      url: `/providers/${provider.id}/favorite-tests`,
      body: {
        testId: test.id,
      },
    })

    expect(response.statusCode).toBe(201)
    const body = camelize(response.json())
    expect(body.testId).toBe(test.id)
    expect(body.casandraTestId).toBe(test.casandraTestId)
  })

  it('DELETE /providers/:providerId should remove provider cascade', async () => {
    const { provider } = await createProviderViaApi(proxy)
    const organization = await createOrganization()
    const test = await createTestCatalog()

    await prisma.providerOrganization.create({
      data: {
        providerId: provider.id,
        organizationId: organization.id,
      },
    })

    await prisma.providerFavoriteTest.create({
      data: {
        providerId: provider.id,
        testId: test.id,
      },
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/providers/${provider.id}`,
    })

    expect(response.statusCode).toBe(200)
    expect(camelize(response.json())).toEqual({ success: true })

    const stored = await prisma.provider.findUnique({ where: { id: provider.id } })
    expect(stored).toBeNull()
  })

  it('POST /providers/:providerId/user-account should return existing account summary when user already exists', async () => {
    const { provider } = await createProviderViaApi(proxy, { email: 'legacy@example.com' })
    const user = await prisma.user.create({
      data: {
        email: 'legacy@example.com',
        password: 'hashed',
      },
    })

    const userAttribute = await prisma.userAttribute.create({
      data: {
        userId: user.id,
        userType: $Enums.UserAttributeUserType.Provider,
      },
    })

    await prisma.provider.update({
      where: { id: provider.id },
      data: { userAttributeId: userAttribute.id },
    })

    const response = await proxy.app.inject({
      method: 'POST',
      url: `/providers/${provider.id}/user-account`,
      body: {
        email: 'legacy@example.com',
      },
    })

    expect(response.statusCode).toBe(201)
    const body = camelize(response.json())
    expect(body.userId).toBe(user.id)
    expect(body.autoVerified).toBe(false)
  })
})
