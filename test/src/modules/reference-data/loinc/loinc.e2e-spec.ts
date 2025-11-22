import { CreateLoincInput } from '@core/modules/reference-data/loinc/loinc.dto'
import { LoincModule } from '@core/modules/reference-data/loinc/loinc.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'

const buildLoincPayload = (overrides: Partial<CreateLoincInput> = {}): CreateLoincInput => {
  const unique = Math.random().toString(36).slice(2, 10).toUpperCase()
  return {
    loincNum: `L${unique}`,
    longCommonName: `Long common name ${unique}`,
    shortname: `Short name ${unique}`,
    component: `Component ${unique}`,
    property: `Property ${unique}`,
    status: 'Active',
    ...overrides,
  }
}

describe('ROUTE /loinc', () => {
  const proxy = createE2EApp({
    imports: [LoincModule],
  })

  it('GET /loinc should list LOINC codes with pagination cursor', async () => {
    const target = await prisma.loinc.create({
      data: buildLoincPayload(),
    })
    await prisma.loinc.create({
      data: buildLoincPayload(),
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/loinc',
      query: {
        search: target.loincNum,
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          loinc_num: target.loincNum,
          long_common_name: target.longCommonName,
          shortname: target.shortname,
        }),
      ]),
    )
    expect(body.next_cursor === null || typeof body.next_cursor === 'string').toBe(true)
  })

  it('GET /loinc/:loincNum should return LOINC detail', async () => {
    const record = await prisma.loinc.create({
      data: buildLoincPayload(),
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/loinc/${record.loincNum}`,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      loinc_num: record.loincNum,
      long_common_name: record.longCommonName,
      shortname: record.shortname,
      component: record.component,
      property: record.property,
      status: record.status,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
  })

  it('POST /loinc should create a LOINC code', async () => {
    const payload = buildLoincPayload()

    const response = await proxy.app.inject({
      method: 'POST',
      url: '/loinc',
      body: payload,
    })

    expect(response.statusCode).toBe(201)
    const body = response.json()
    expect(body).toMatchObject({
      loinc_num: payload.loincNum,
      long_common_name: payload.longCommonName,
      shortname: payload.shortname,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
  })

  it('PUT /loinc/:loincNum should update the LOINC code', async () => {
    const record = await prisma.loinc.create({
      data: buildLoincPayload(),
    })
    const updatePayload = {
      longCommonName: 'Updated LOINC long name',
      status: 'Deprecated',
    }

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/loinc/${record.loincNum}`,
      body: updatePayload,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body.long_common_name).toBe(updatePayload.longCommonName)
    expect(body.status).toBe(updatePayload.status)

    const stored = await prisma.loinc.findUnique({
      where: { loincNum: record.loincNum },
    })
    expect(stored?.longCommonName).toBe(updatePayload.longCommonName)
    expect(stored?.status).toBe(updatePayload.status)
  })

  it('DELETE /loinc/:loincNum should delete the LOINC code', async () => {
    const record = await prisma.loinc.create({
      data: buildLoincPayload(),
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/loinc/${record.loincNum}`,
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ success: true })

    const deleted = await prisma.loinc.findUnique({
      where: { loincNum: record.loincNum },
    })
    expect(deleted).toBeNull()
  })
})
