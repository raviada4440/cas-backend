import { $Enums } from '@db/client'
import { OrderFormsModule } from '@core/modules/catalog/order-forms/order-forms.module'
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

const normalizeItems = (payload: any) => {
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

const createTestCatalogContext = async () => {
  const unique = Math.random().toString(36).slice(2, 8)
  const lab = await prisma.lab.create({
    data: {
      labName: `OrderForm Lab ${unique}`,
      labCode: unique.slice(0, 2),
    },
  })

  const test = await prisma.testCatalog.create({
    data: {
      labId: lab.id,
      casandraTestId: `CAS-${unique}`,
      testName: `Order Form Test ${unique}`,
      status: $Enums.TestCatalogStatus.PUBLISHED,
    },
  })

  const version = await prisma.testCatalogVersion.create({
    data: {
      testId: test.id,
      versionNumber: 1,
      status: $Enums.TestCatalogVersionStatus.PUBLISHED,
      methodology: 'NGS',
    },
  })

  return { lab, test, version }
}

describe('Catalog Order Forms', () => {
  const proxy = createE2EApp({
    imports: [OrderFormsModule],
  })

  const createSectionViaApi = async (overrides: Record<string, unknown> = {}) => {
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/order-forms/sections',
      body: {
        name: `Section ${Math.random().toString(36).slice(2, 6)}`,
        description: 'General section',
        sortOrder: 1,
        isActive: true,
        ...overrides,
      },
    })

    expect(response.statusCode).toBe(201)
    return camelize(response.json())
  }

  const createTemplateViaApi = async (sectionId: string, overrides: Record<string, unknown> = {}) => {
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/order-forms/templates',
      body: {
        orderFormSectionId: sectionId,
        name: `Template ${Math.random().toString(36).slice(2, 6)}`,
        description: 'Template description',
        status: $Enums.OrderFormTemplateStatus.DRAFT,
        isGlobal: true,
        ...overrides,
      },
    })

    expect(response.statusCode).toBe(201)
    return camelize(response.json())
  }

  it('should create, list, and update order form sections', async () => {
    const created = await createSectionViaApi()

    const listResponse = await proxy.app.inject({
      method: 'GET',
      url: '/order-forms/sections',
    })

    expect(listResponse.statusCode).toBe(200)
    const items = normalizeItems(camelize(listResponse.json()))
    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: created.id,
          name: created.name,
        }),
      ]),
    )

    const updateResponse = await proxy.app.inject({
      method: 'PUT',
      url: `/order-forms/sections/${created.id}`,
      body: {
        sectionId: created.id,
        name: 'Updated Section',
        sortOrder: 5,
        isActive: false,
      },
    })

    expect(updateResponse.statusCode).toBe(200)
    const updated = camelize(updateResponse.json())
    expect(updated.name).toBe('Updated Section')
    expect(updated.isActive).toBe(false)
    expect(updated.sortOrder).toBe(5)
  })

  it('should create templates, list with filters, get, and update detail', async () => {
    const section = await createSectionViaApi()
    const template = await createTemplateViaApi(section.id, {
      status: $Enums.OrderFormTemplateStatus.ACTIVE,
    })

    const filteredList = await proxy.app.inject({
      method: 'GET',
      url: '/order-forms/templates',
      query: {
        sectionId: section.id,
        status: $Enums.OrderFormTemplateStatus.ACTIVE,
      },
    })

    expect(filteredList.statusCode).toBe(200)
    const filteredItems = normalizeItems(camelize(filteredList.json()))
    expect(filteredItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: template.id,
          orderFormSectionId: section.id,
        }),
      ]),
    )

    const getResponse = await proxy.app.inject({
      method: 'GET',
      url: `/order-forms/templates/${template.id}`,
    })

    expect(getResponse.statusCode).toBe(200)
    const fetched = camelize(getResponse.json())
    expect(fetched.id).toBe(template.id)
    expect(fetched.section?.id).toBe(section.id)

    const updateResponse = await proxy.app.inject({
      method: 'PUT',
      url: `/order-forms/templates/${template.id}`,
      body: {
        templateId: template.id,
        name: 'Updated Template',
        status: $Enums.OrderFormTemplateStatus.RETIRED,
        effectiveDate: new Date().toISOString(),
      },
    })

    expect(updateResponse.statusCode).toBe(200)
    const updated = camelize(updateResponse.json())
    expect(updated.name).toBe('Updated Template')
    expect(updated.status).toBe('RETIRED')
  })

  it('should assign templates to a test version and retrieve assignments', async () => {
    const ctx = await createTestCatalogContext()
    const section = await createSectionViaApi()
    const template = await createTemplateViaApi(section.id)

    const assignResponse = await proxy.app.inject({
      method: 'POST',
      url: `/catalog/tests/${ctx.test.id}/order-forms`,
      body: {
        testId: ctx.test.id,
        versionId: ctx.version.id,
        assignments: [
          {
            orderFormTemplateId: template.id,
            displayOrder: 0,
            customTitle: 'Custom Title',
            isVisible: true,
            isRequired: true,
          },
        ],
      },
    })

    expect(assignResponse.statusCode).toBe(201)
    const assigned = normalizeItems(camelize(assignResponse.json()))
    expect(assigned).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          orderFormTemplateId: template.id,
          customTitle: 'Custom Title',
          isVisible: true,
          isRequired: true,
        }),
      ]),
    )

    const getAssignmentsResponse = await proxy.app.inject({
      method: 'GET',
      url: `/catalog/tests/${ctx.test.id}/order-forms`,
      query: {
        versionId: ctx.version.id,
      },
    })

    expect(getAssignmentsResponse.statusCode).toBe(200)
    const retrieved = normalizeItems(camelize(getAssignmentsResponse.json()))
    expect(retrieved).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          orderFormTemplateId: template.id,
          customTitle: 'Custom Title',
        }),
      ]),
    )
  })
})
