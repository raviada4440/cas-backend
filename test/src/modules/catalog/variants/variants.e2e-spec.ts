import { $Enums } from '@db/client'
import { VariantsModule } from '@core/modules/catalog/variants/variants.module'
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

const normalizeList = (payload: any) => {
  if (Array.isArray(payload)) {
    return payload
  }
  if (Array.isArray(payload.items)) {
    return payload.items
  }
  if (Array.isArray(payload.data)) {
    return payload.data
  }
  return []
}

const createVariantContext = async () => {
  const unique = Math.random().toString(36).slice(2, 8)
  const lab = await prisma.lab.create({
    data: {
      labName: `Variant Lab ${unique}`,
      labCode: unique.slice(0, 2),
    },
  })

  const test = await prisma.testCatalog.create({
    data: {
      labId: lab.id,
      casandraTestId: `CAS-${unique}`,
      testName: `Variant Test ${unique}`,
      status: $Enums.TestCatalogStatus.PUBLISHED,
      currentVersion: 1,
    },
  })

  const version = await prisma.testCatalogVersion.create({
    data: {
      testId: test.id,
      versionNumber: 1,
      status: $Enums.TestCatalogVersionStatus.PUBLISHED,
      methodology: 'NGS',
      testName: test.testName,
    },
  })

  const specimen = await prisma.testCatalogVersionSpecimen.create({
    data: {
      versionId: version.id,
      displayName: 'Whole Blood',
      isPrimary: true,
      isRequired: true,
      specimenType: $Enums.SpecimenType.WHOLE_BLOOD,
      displayOrder: 0,
    },
  })

  const orderLoincCode = `LOINC-${unique}`
  const resultLoincCode = `LOINC-RES-${unique}`

  await prisma.loinc.create({
    data: {
      loincNum: orderLoincCode,
      longCommonName: `Order Loinc ${unique}`,
      component: 'Component',
      property: 'Prop',
      system: 'System',
      scaleTyp: 'Scale',
      methodTyp: 'Method',
      status: 'ACTIVE',
    },
  })

  await prisma.loinc.create({
    data: {
      loincNum: resultLoincCode,
      longCommonName: `Result Loinc ${unique}`,
      component: 'Component',
      property: 'Prop',
      system: 'System',
      scaleTyp: 'Scale',
      methodTyp: 'Method',
      status: 'ACTIVE',
    },
  })

  const biomarker = await prisma.biomarker.create({
    data: {
      hgncId: `HGNC:${unique}`,
      hgncStatus: 'Approved',
      hgncApprovedSymbol: `SYM_${unique}`,
      hgncApprovedName: `Biomarker ${unique}`,
    },
  })

  return { test, version, specimen, orderLoincCode, resultLoincCode, biomarker }
}

const buildOperationalPayload = (
  ctx: Awaited<ReturnType<typeof createVariantContext>>,
  overrides: Record<string, unknown> = {},
) => ({
  versionId: ctx.version.id,
  configurationName: 'Operational Config',
  dimension: $Enums.VariantDimension.OPERATIONAL_MODE,
  dimensionValue: 'STANDARD',
  status: $Enums.TestCatalogConfigurationStatus.ACTIVE,
  isActive: true,
  cptOverrides: [
    {
      cptCode: '12345',
      modifier: 'LT',
      isPrimary: true,
    },
  ],
  orderLoincOverrides: [
    {
      loincCode: ctx.orderLoincCode,
    },
  ],
  resultLoincOverrides: [
    {
      loincCode: ctx.resultLoincCode,
      resultCode: 'RES-1',
      resultCodeName: 'Result Name',
      uom: 'mg/dL',
    },
  ],
  biomarkerOverrides: [
    {
      hgncId: ctx.biomarker.hgncId,
      action: $Enums.BiomarkerOverrideAction.INCLUDE,
      transcriptReference: null,
      reportTier: null,
      isReportable: null,
      displayOrder: 0,
      notes: null,
      symbol: ctx.biomarker.hgncApprovedSymbol,
      name: ctx.biomarker.hgncApprovedName,
    },
  ],
  ...overrides,
})

describe('Catalog Variants', () => {
  const proxy = createE2EApp({
    imports: [VariantsModule],
  })

  it('should list operational variants after creation', async () => {
    const ctx = await createVariantContext()

    const createResponse = await proxy.app.inject({
      method: 'POST',
      url: `/catalog/tests/${ctx.test.id}/variants/operational`,
      body: buildOperationalPayload(ctx),
    })

    expect(createResponse.statusCode).toBe(201)
    const created = camelize(createResponse.json())
    expect(created.testId).toBe(ctx.test.id)
    expect(Array.isArray(created.specimenManifest)).toBe(true)

    const listResponse = await proxy.app.inject({
      method: 'GET',
      url: `/catalog/tests/${ctx.test.id}/variants/operational`,
      query: {
        versionId: ctx.version.id,
      },
    })

    expect(listResponse.statusCode).toBe(200)
    const items = normalizeList(camelize(listResponse.json()))
    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          testId: ctx.test.id,
          configurationName: 'Operational Config',
        }),
      ]),
    )
  })

  it('should update operational variant', async () => {
    const ctx = await createVariantContext()

    const config = await prisma.testCatalogConfiguration.create({
      data: {
        testId: ctx.test.id,
        versionId: ctx.version.id,
        configurationName: 'Initial Config',
        versionNumber: 1,
        type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
        dimension: $Enums.VariantDimension.OPERATIONAL_MODE,
        dimensionValue: 'STANDARD',
        status: $Enums.TestCatalogConfigurationStatus.ACTIVE,
        isActive: true,
      },
    })

    const newLoinc = `LOINC-${Math.random().toString(36).slice(2, 8)}`
    await prisma.loinc.create({
      data: {
        loincNum: newLoinc,
        longCommonName: 'New Loinc',
        component: 'Component',
        property: 'Prop',
        system: 'System',
        scaleTyp: 'Scale',
        methodTyp: 'Method',
        status: 'ACTIVE',
      },
    })

    const updateResponse = await proxy.app.inject({
      method: 'PUT',
      url: `/catalog/tests/${ctx.test.id}/variants/operational/${config.id}`,
      body: buildOperationalPayload(ctx, {
        configurationName: 'Updated Config',
        dimensionValue: 'UPDATED',
        isActive: false,
        orderLoincOverrides: [
          {
            loincCode: newLoinc,
          },
        ],
      }),
    })

    expect(updateResponse.statusCode).toBe(200)
    const body = camelize(updateResponse.json())
    expect(body.configurationName).toBe('Updated Config')
    expect(body.dimensionValue).toBe('UPDATED')
    expect(body.isActive).toBe(false)
  })

  it('should list and upsert customer variants', async () => {
    const ctx = await createVariantContext()

    const createResponse = await proxy.app.inject({
      method: 'POST',
      url: `/catalog/tests/${ctx.test.id}/variants/customer`,
      body: {
        configurationName: 'Customer Config',
        versionId: ctx.version.id,
        customerId: 'f7b97234-7da2-4f62-bc1e-5f3d0b1b4eed',
        status: $Enums.TestCatalogConfigurationStatus.ACTIVE,
        isActive: true,
        customTestName: 'Custom Panel',
      },
    })

    expect(createResponse.statusCode).toBe(201)
    const created = camelize(createResponse.json())
    expect(created.customTestName).toBe('Custom Panel')

    const listResponse = await proxy.app.inject({
      method: 'GET',
      url: `/catalog/tests/${ctx.test.id}/variants/customer`,
    })

    expect(listResponse.statusCode).toBe(200)
    const items = normalizeList(camelize(listResponse.json()))
    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          configurationName: 'Customer Config',
        }),
      ]),
    )
  })

  it('should bulk upsert and delete biomarker overrides', async () => {
    const ctx = await createVariantContext()

    const configuration = await prisma.testCatalogConfiguration.create({
      data: {
        testId: ctx.test.id,
        versionId: ctx.version.id,
        configurationName: 'Biomarker Config',
        versionNumber: 1,
        type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
        dimension: $Enums.VariantDimension.OPERATIONAL_MODE,
        dimensionValue: 'STANDARD',
        status: $Enums.TestCatalogConfigurationStatus.ACTIVE,
        isActive: true,
      },
    })

    const upsertResponse = await proxy.app.inject({
      method: 'POST',
      url: `/catalog/variants/${configuration.id}/biomarkers/bulk-upsert`,
      body: {
        overrides: [
          {
            hgncId: ctx.biomarker.hgncId,
            action: $Enums.BiomarkerOverrideAction.INCLUDE,
            transcriptReference: null,
            reportTier: null,
            isReportable: null,
            displayOrder: 0,
            notes: null,
            symbol: ctx.biomarker.hgncApprovedSymbol,
            name: ctx.biomarker.hgncApprovedName,
          },
        ],
      },
    })

    expect(upsertResponse.statusCode).toBe(201)
    const upsertBody = camelize(upsertResponse.json())
    expect(upsertBody.overrides.length).toBe(1)

    const deleteResponse = await proxy.app.inject({
      method: 'POST',
      url: `/catalog/variants/${configuration.id}/biomarkers/delete`,
      body: {
        hgncIds: [ctx.biomarker.hgncId],
      },
    })

    expect(deleteResponse.statusCode).toBe(201)
    const deleteBody = camelize(deleteResponse.json())
    expect(deleteBody.overrides.length).toBe(0)
  })
})
