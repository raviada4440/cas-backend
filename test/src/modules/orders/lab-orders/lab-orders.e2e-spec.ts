import { $Enums } from '@db/client'
import { LabOrdersModule } from '@core/modules/orders/lab-orders/lab-orders.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { randomUUID } from 'node:crypto'

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

const createDependencies = async () => {
  const unique = randomUUID().slice(0, 8)

  const lab = await prisma.lab.create({
    data: {
      labName: `Central Lab ${unique}`,
      labCode: unique.slice(0, 2),
      city: 'Austin',
      state: 'TX',
    },
  })

  const loincCode = `LOINC-${unique}`

  await prisma.loinc.create({
    data: {
      loincNum: loincCode,
      component: 'Genetic panel',
      property: 'Prop',
      system: 'Blood',
      scaleTyp: 'Qn',
      methodTyp: 'NGS',
      longCommonName: `Loinc ${unique}`,
      status: 'ACTIVE',
    },
  })

  const test = await prisma.testCatalog.create({
    data: {
      labId: lab.id,
      casandraTestId: `CAS-${unique}`,
      labTestId: `LAB-${unique}`,
      testName: `Oncology Panel ${unique}`,
      testCategory: 'Oncology',
      testSubCategory: 'Somatic',
      status: $Enums.TestCatalogStatus.PUBLISHED,
      currentVersion: 1,
    },
  })

  const version = await prisma.testCatalogVersion.create({
    data: {
      testId: test.id,
      versionNumber: 1,
      status: $Enums.TestCatalogVersionStatus.PUBLISHED,
      testName: test.testName,
      methodology: 'NGS',
      turnAroundTime: '48 hours',
    },
  })

  await prisma.testCatalog.update({
    where: { id: test.id },
    data: { defaultVersionId: version.id },
  })

  await prisma.testCatalogVersionOrderLoinc.create({
    data: {
      versionId: version.id,
      loincCode,
    },
  })

  await prisma.testCatalogVersionSpecimen.create({
    data: {
      versionId: version.id,
      displayName: 'Whole Blood',
      isPrimary: true,
      specimenType: $Enums.SpecimenType.WHOLE_BLOOD,
      minimumVolume: '5 mL',
      container: 'EDTA Tube',
    },
  })

  const configuration = await prisma.testCatalogConfiguration.create({
    data: {
      testId: test.id,
      versionId: version.id,
      configurationName: `Config ${unique}`,
      versionNumber: 1,
      type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
      status: $Enums.TestCatalogConfigurationStatus.ACTIVE,
      isDefault: true,
      isActive: true,
      dimension: $Enums.VariantDimension.FAMILY_STRUCTURE,
      dimensionValue: 'NONE',
      customTestName: `Active Panel ${unique}`,
      customTurnAroundTime: '72 hours',
      operationalCode: `OP-${unique}`,
    },
  })

  const patient = await prisma.patient.create({
    data: {
      firstName: 'Alice',
      lastName: `Tester${unique}`,
      email: `patient_${unique}@example.com`,
      mobile: '555-0100',
    },
  })

  const provider = await prisma.provider.create({
    data: {
      firstName: 'Greg',
      lastName: `House${unique}`,
      npi: `NPI${unique.slice(0, 6)}`,
    },
  })

  const organization = await prisma.organization.create({
    data: {
      orgName: `Oncology Clinic ${unique}`,
      orgAddress: '123 Health St',
      orgCity: 'Austin',
      orgState: 'TX',
      orgZip: '73301',
    },
  })

  return { unique, lab, test, version, configuration, patient, provider, organization }
}

const createLabOrderFixtures = async (
  proxy: ReturnType<typeof createE2EApp>,
  overrides: Record<string, unknown> = {},
) => {
  const base = await createDependencies()
  const timestamp = new Date().toISOString()

  const response = await proxy.app.inject({
    method: 'POST',
    url: '/laborders',
    body: {
      patientId: base.patient.id,
      testId: base.test.id,
      familyStructure: 'NONE',
      orderDate: timestamp,
      orderingProviderId: base.provider.id,
      organizationId: base.organization.id,
      orderNotes: 'Initial pathology request',
      specimens: [
        {
          specimenType: 'WHOLE_BLOOD',
          collectedDate: timestamp,
          specimenCount: '1',
          bodySite: 'Left Arm',
        },
      ],
      ...overrides,
    },
  })

  expect(response.statusCode).toBe(201)
  const detail = camelize(response.json())

  return { ...base, labOrder: detail }
}

describe('ROUTE /laborders', () => {
  const proxy = createE2EApp({
    imports: [LabOrdersModule],
  })

  it('POST /laborders should create a lab order with related artifacts', async () => {
    const { labOrder, patient, configuration, version, provider, organization } =
      await createLabOrderFixtures(proxy)

    expect(labOrder.id).toBeDefined()
    expect(labOrder.patient?.id).toBe(patient.id)
    expect(labOrder.configuration?.id).toBe(configuration.id)
    expect(labOrder.version?.id).toBe(version.id)
    expect(labOrder.orderingProviderId).toBe(provider.id)
    expect(labOrder.organizationId).toBe(organization.id)

    expect(labOrder.labOrderSpecimens).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          specimenType: 'WHOLE_BLOOD',
          specimenCount: '1',
          bodySite: 'Left Arm',
        }),
      ]),
    )

    expect(labOrder.labOrderStatuses).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          status: 'DRAFT',
        }),
      ]),
    )
  })

  it('GET /laborders should list lab orders with summary metrics', async () => {
    const { labOrder, test, lab, patient } = await createLabOrderFixtures(proxy)

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/laborders',
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.total).toBe(1)
    expect(body.nextCursor).toBeNull()
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: labOrder.id,
          casandraTestId: test.casandraTestId,
          labName: lab.labName,
          patientName: expect.stringContaining(patient.firstName),
          status: 'DRAFT',
          versionNumber: 1,
        }),
      ]),
    )
  })

  it('GET /laborders/:labOrderId should return detail view', async () => {
    const { labOrder, patient, test } = await createLabOrderFixtures(proxy)

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/laborders/${labOrder.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.id).toBe(labOrder.id)
    expect(body.patient?.firstName).toBe(patient.firstName)
    expect(body.version?.versionNumber).toBe(1)
    expect(body.version?.orderLoincs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          loincCode: expect.stringContaining('LOINC-'),
        }),
      ]),
    )
    expect(body.labOrderTests[0]?.testCatalog?.testId).toBe(test.id)
    expect(body.labOrderStatuses).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          status: 'DRAFT',
        }),
      ]),
    )
  })

  it('PUT /laborders/:labOrderId should update notes and specimen records', async () => {
    const { labOrder } = await createLabOrderFixtures(proxy)
    const existingSpecimen = labOrder.labOrderSpecimens[0]

    const updateResponse = await proxy.app.inject({
      method: 'PUT',
      url: `/laborders/${labOrder.id}`,
      body: {
        orderNotes: 'Updated instructions for collection',
        specimens: [
          {
            id: existingSpecimen.id,
            specimenType: 'PLASMA',
            collectedDate: new Date().toISOString(),
            specimenCount: '2',
            bodySite: 'Right Arm',
          },
          {
            specimenType: 'SERUM',
            collectedDate: new Date().toISOString(),
            specimenCount: '1',
            bodySite: 'Vein',
          },
        ],
      },
    })

    expect(updateResponse.statusCode).toBe(200)
    const updated = camelize(updateResponse.json())
    expect(updated.orderNotes).toBe('Updated instructions for collection')
    expect(updated.labOrderSpecimens.length).toBe(2)
    expect(updated.labOrderSpecimens).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          specimenType: 'PLASMA',
          specimenCount: '2',
          bodySite: 'Right Arm',
        }),
        expect.objectContaining({
          specimenType: 'SERUM',
          specimenCount: '1',
          bodySite: 'Vein',
        }),
      ]),
    )
  })

  it('PATCH /laborders/:labOrderId/status should append status history', async () => {
    const { labOrder } = await createLabOrderFixtures(proxy)

    const response = await proxy.app.inject({
      method: 'PATCH',
      url: `/laborders/${labOrder.id}/status`,
      body: {
        status: 'SUBMITTED',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(
      body.labOrderStatuses.some((status: { status: string }) => status.status === 'SUBMITTED'),
    ).toBe(true)
  })

  it('DELETE /laborders/:labOrderId should remove the lab order', async () => {
    const { labOrder } = await createLabOrderFixtures(proxy)

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/laborders/${labOrder.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body).toEqual({ success: true })

    const stored = await prisma.labOrder.findUnique({
      where: { id: labOrder.id },
    })
    expect(stored).toBeNull()
  })
  it('GET /orderable-tests should surface active configurations', async () => {
    const { configuration, test } = await createDependencies()

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/orderable-tests',
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.data)).toBe(true)
    expect(body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          testId: test.id,
          orderName: configuration.customTestName,
          versionId: expect.any(String),
          requiredSpecimens: expect.arrayContaining([
            expect.objectContaining({
              displayName: 'Whole Blood',
            }),
          ]),
          turnAroundTime: '72 hours',
        }),
      ]),
    )
  })
})
