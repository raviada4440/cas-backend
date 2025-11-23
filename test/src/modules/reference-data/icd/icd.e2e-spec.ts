import { IcdModule } from '@core/modules/reference-data/icd/icd.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { Prisma } from '@db/client'

type IcdSeed = {
  code: string
  shortDescription: string | null
  alias1: string | null
  alias2: string | null
  alias3: string | null
  alias4: string | null
}

const buildIcdPayload = (overrides: Partial<IcdSeed> = {}) => {
  const unique = Math.random().toString(36).slice(2, 10).toUpperCase()
  const snapshot: IcdSeed = {
    code: `I${unique}`.slice(0, 7),
    shortDescription: `ICD description ${unique}`,
    alias1: `Alias1 ${unique}`,
    alias2: null,
    alias3: null,
    alias4: null,
    ...overrides,
  }
  return {
    data: snapshot as Prisma.IcdCreateInput,
    snapshot,
  }
}

describe('ROUTE /icd-codes', () => {
  const proxy = createE2EApp({
    imports: [IcdModule],
  })

  it('GET /icd-codes should list ICD codes with pagination cursor', async () => {
    const { data, snapshot } = buildIcdPayload()
    const target = await prisma.icd.create({
      data,
    })
    await prisma.icd.create({
      data: buildIcdPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/icd-codes',
      query: {
        search: snapshot.code ?? '',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: target.id,
          code: target.code,
          short_description: target.shortDescription,
        }),
      ]),
    )
    expect(body.next_cursor === null || typeof body.next_cursor === 'string').toBe(true)
  })

  it('GET /icd-codes/:icdId should return ICD detail', async () => {
    const record = await prisma.icd.create({
      data: buildIcdPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/icd-codes/${record.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      id: record.id,
      code: record.code,
      short_description: record.shortDescription,
      alias1: record.alias1,
      alias2: record.alias2,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
  })

  it('POST /icd-codes should create an ICD code', async () => {
    const { data: payload, snapshot } = buildIcdPayload()

    const response = await proxy.app.inject({
      method: 'POST',
      url: '/icd-codes',
      body: payload,
    })

    expect(response.statusCode).toBe(201)
    const body = response.json()
    expect(body).toMatchObject({
      code: snapshot.code,
      short_description: snapshot.shortDescription,
      alias1: snapshot.alias1,
      alias2: snapshot.alias2,
    })
    expect(body.id).toBeDefined()
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')

    const stored = await prisma.icd.findUnique({
      where: { id: body.id },
    })
    expect(stored).not.toBeNull()
  })

  it('PUT /icd-codes/:icdId should update the ICD code', async () => {
    const record = await prisma.icd.create({
      data: buildIcdPayload().data,
    })
    const updatePayload = {
      shortDescription: 'Updated ICD description',
      alias3: 'Updated alias 3',
    }

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/icd-codes/${record.id}`,
      body: updatePayload,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body.short_description).toBe(updatePayload.shortDescription)
    expect(body.alias3).toBe(updatePayload.alias3)

    const stored = await prisma.icd.findUnique({
      where: { id: record.id },
    })
    expect(stored?.shortDescription).toBe(updatePayload.shortDescription)
    expect(stored?.alias3).toBe(updatePayload.alias3)
  })

  it('DELETE /icd-codes/:icdId should delete the ICD code', async () => {
    const record = await prisma.icd.create({
      data: buildIcdPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/icd-codes/${record.id}`,
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ success: true })

    const deleted = await prisma.icd.findUnique({
      where: { id: record.id },
    })
    expect(deleted).toBeNull()
  })
})
