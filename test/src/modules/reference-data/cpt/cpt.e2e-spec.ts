import { CptModule } from '@core/modules/reference-data/cpt/cpt.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { Prisma } from '@db/client'

type CptSeed = {
  code: string
  shortDescription: string | null
  longDescription: string | null
}

const buildCptPayload = (overrides: Partial<CptSeed> = {}) => {
  const unique = Math.random().toString(36).slice(2, 10).toUpperCase()
  const snapshot: CptSeed = {
    code: `C${unique}`.slice(0, 10),
    shortDescription: `Short description ${unique}`,
    longDescription: `Long description ${unique}`,
    ...overrides,
  }
  return {
    data: snapshot as Prisma.CptCodeCreateInput,
    snapshot,
  }
}

describe('ROUTE /cpt-codes', () => {
  const proxy = createE2EApp({
    imports: [CptModule],
  })

  it('GET /cpt-codes should list codes with pagination cursor', async () => {
    const { data, snapshot } = buildCptPayload()
    const target = await prisma.cptCode.create({
      data,
    })
    await prisma.cptCode.create({
      data: buildCptPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/cpt-codes',
      query: {
        search: snapshot.code,
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
    const { data } = buildCptPayload()
    const record = await prisma.cptCode.create({
      data,
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
    const { snapshot } = buildCptPayload()
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/cpt-codes',
      body: snapshot,
    })

    expect(response.statusCode).toBe(201)
    const body = response.json()
    expect(body).toMatchObject({
      code: snapshot.code,
      short_description: snapshot.shortDescription,
      long_description: snapshot.longDescription,
    })

    const stored = await prisma.cptCode.findUnique({
      where: { code: snapshot.code },
    })
    expect(stored).not.toBeNull()
  })

  it('PUT /cpt-codes/:code should update CPT fields', async () => {
    const target = await prisma.cptCode.create({
      data: buildCptPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/cpt-codes/${target.code}`,
      body: {
        shortDescription: 'Updated short description',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body.short_description).toBe('Updated short description')

    const stored = await prisma.cptCode.findUnique({
      where: { code: target.code },
    })
    expect(stored?.shortDescription).toBe('Updated short description')
  })

  it('DELETE /cpt-codes/:code should remove code', async () => {
    const target = await prisma.cptCode.create({
      data: buildCptPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/cpt-codes/${target.code}`,
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ success: true })

    const deleted = await prisma.cptCode.findUnique({
      where: { code: target.code },
    })
    expect(deleted).toBeNull()
  })
})
