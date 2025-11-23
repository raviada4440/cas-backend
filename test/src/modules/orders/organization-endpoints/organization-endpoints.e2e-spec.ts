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

describe('Public Organization Endpoints', () => {
  const proxy = createE2EApp({
    imports: [OrganizationsModule],
  })

  const createEndpoint = async (overrides: Record<string, unknown> = {}) => {
    return prisma.organizationEndpoint.create({
      data: {
        orgName: `Org ${Math.random().toString(36).slice(2, 6)}`,
        ehrVendor: 'Epic',
        fhirVersion: 'R4',
        endpoint: 'https://ehr.example.com/fhir',
        issuer: 'https://issuer.example.com',
        isActive: true,
        ...overrides,
      },
    })
  }

  it('GET /public/organizations/endpoints should list with optional filters', async () => {
    const target = await createEndpoint({ orgName: 'City Health Center', ehrVendor: 'Cerner' })
    await createEndpoint()

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/public/organizations/endpoints',
      query: {
        search: 'City',
        vendor: 'Cerner',
        limit: '10',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: target.id,
          orgName: target.orgName,
          ehrVendor: target.ehrVendor,
        }),
      ]),
    )
  })

  it('GET /public/organizations/endpoints/:endpointId should return detail', async () => {
    const endpoint = await createEndpoint({ orgName: 'Regional Clinic' })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/public/organizations/endpoints/${endpoint.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.id).toBe(endpoint.id)
    expect(body.orgName).toBe('Regional Clinic')
    expect(body.fhirVersion).toBe('R4')
  })
})
