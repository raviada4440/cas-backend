import { CreateCptInput } from '@core/modules/reference-data/cpt/cpt.dto'
import { CptModule } from '@core/modules/reference-data/cpt/cpt.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'

const buildCptPayload = (overrides: Partial<CreateCptInput> = {}): CreateCptInput => {
  const unique = Math.random().toString(36).slice(2, 10).toUpperCase()
  return {
    code: `C${unique}`.slice(0, 10),
    shortDescription: `Short description ${unique}`,
    longDescription: `Long description ${unique}`,
    ...overrides,
  }
}

describe('ROUTE /cpt-codes', () => {
  const proxy = createE2EApp({
    imports: [CptModule],
  })

  it('GET /cpt-codes should list codes with pagination cursor', async () => {
    const target = await prisma.cptCode.create({
      data: buildCptPayload(),
    })
    await prisma.cptCode.create({
      data: buildCptPayload(),
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/cpt-codes',
      query: {
        search: target.code,
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: target.code,
          short_description: target.shortDescription,
        }),
      ]),
    )
    expect(body.next_cursor === null || typeof body.next_cursor === 'string').toBe(true)
  })

  it('GET /cpt-codes/:code should return code detail', async () => {
    const record = await prisma.cptCode.create({
      data: buildCptPayload(),
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/cpt-codes/${record.code}`,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      code: record.code,
      short_description: record.shortDescription,
      long_description: record.longDescription,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
  })

  it('POST /cpt-codes should create a CPT code', async () => {
    const payload = buildCptPayload()
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/cpt-codes',
      body: payload,
    })

    expect(response.statusCode).toBe(201)
    const body = response.json()
    expect(body).toMatchObject({
      code: payload.code,
      short_description: payload.shortDescription,
      long_description: payload.longDescription,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
  })

  it('PUT /cpt-codes/:code should update the CPT code', async () => {
    const original = await prisma.cptCode.create({
      data: buildCptPayload(),
    })
    const updatePayload = {
      shortDescription: 'Updated short description',
      longDescription: 'Updated long description',
    }

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/cpt-codes/${original.code}`,
      body: updatePayload,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body.short_description).toBe(updatePayload.shortDescription)
    expect(body.long_description).toBe(updatePayload.longDescription)

    const stored = await prisma.cptCode.findUnique({
      where: { code: original.code },
    })
    expect(stored?.shortDescription).toBe(updatePayload.shortDescription)
    expect(stored?.longDescription).toBe(updatePayload.longDescription)
  })

  it('DELETE /cpt-codes/:code should delete the CPT code', async () => {
    const record = await prisma.cptCode.create({
      data: buildCptPayload(),
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/cpt-codes/${record.code}`,
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ success: true })

    const deleted = await prisma.cptCode.findUnique({
      where: { code: record.code },
    })
    expect(deleted).toBeNull()
  })
})
