import { BiomarkersModule } from '@core/modules/reference-data/biomarkers/biomarkers.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { Prisma } from '@db/client'

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

type BiomarkerSeed = {
  hgncId: string
  hgncStatus: string | null
  hgncApprovedSymbol: string
  hgncApprovedName: string
}

const buildBiomarkerSeed = (overrides: Partial<BiomarkerSeed> = {}) => {
  const unique = Math.random().toString(36).slice(2, 10).toUpperCase()
  const snapshot: BiomarkerSeed = {
    hgncId: `HGNC_${unique}`.slice(0, 20),
    hgncStatus: 'Approved',
    hgncApprovedSymbol: `SYM_${unique}`,
    hgncApprovedName: `Biomarker ${unique}`,
  }
  const merged: BiomarkerSeed = {
    ...snapshot,
    ...overrides,
  }
  return {
    data: merged as Prisma.BiomarkerCreateInput,
    snapshot: merged,
  }
}

describe('ROUTE /biomarkers', () => {
  const proxy = createE2EApp({
    imports: [BiomarkersModule],
  })

  it('GET /biomarkers should list biomarkers with pagination cursor', async () => {
    const { data: seedData, snapshot } = buildBiomarkerSeed()
    const created = await prisma.biomarker.create({ data: seedData })
    await prisma.biomarker.create({ data: buildBiomarkerSeed().data })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/biomarkers',
      query: {
        search: snapshot.hgncApprovedSymbol,
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toContainEqual({
      hgncId: created.hgncId,
      hgncApprovedSymbol: created.hgncApprovedSymbol,
      hgncApprovedName: created.hgncApprovedName,
    })
    expect(body.nextCursor === null || typeof body.nextCursor === 'string').toBe(true)
  })

  it('GET /biomarkers/:hgncId should return biomarker detail', async () => {
    const { data: payload, snapshot } = buildBiomarkerSeed()
    const target = await prisma.biomarker.create({ data: payload })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/biomarkers/${target.hgncId}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body).toMatchObject({
      hgncId: target.hgncId,
      hgncApprovedSymbol: snapshot.hgncApprovedSymbol,
      hgncApprovedName: snapshot.hgncApprovedName,
      hgncStatus: snapshot.hgncStatus,
    })
    expect(typeof body.createdAt).toBe('string')
    expect(typeof body.updatedAt).toBe('string')
  })

  it('POST /biomarkers should create a biomarker', async () => {
    const { data: payload, snapshot } = buildBiomarkerSeed()

    const response = await proxy.app.inject({
      method: 'POST',
      url: '/biomarkers',
      body: payload,
    })

    expect(response.statusCode).toBe(201)
    const body = camelize(response.json())
    expect(body).toMatchObject({
      hgncId: snapshot.hgncId,
      hgncApprovedSymbol: snapshot.hgncApprovedSymbol,
      hgncApprovedName: snapshot.hgncApprovedName,
      hgncStatus: snapshot.hgncStatus,
    })
    expect(body.createdAt).toBeDefined()
    expect(body.updatedAt).toBeDefined()

    const stored = await prisma.biomarker.findUnique({
      where: { hgncId: snapshot.hgncId },
    })
    expect(stored).not.toBeNull()
  })

  it('PUT /biomarkers/:hgncId should update biomarker fields', async () => {
    const original = await prisma.biomarker.create({
      data: buildBiomarkerSeed().data,
    })

    const updatePayload = {
      hgncApprovedName: 'Updated Biomarker',
    }

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/biomarkers/${original.hgncId}`,
      body: updatePayload,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.hgncApprovedName).toBe(updatePayload.hgncApprovedName)

    const stored = await prisma.biomarker.findUnique({
      where: { hgncId: original.hgncId },
    })
    expect(stored?.hgncApprovedName).toBe(updatePayload.hgncApprovedName)
  })

  it('DELETE /biomarkers/:hgncId should delete biomarker', async () => {
    const target = await prisma.biomarker.create({
      data: buildBiomarkerSeed().data,
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/biomarkers/${target.hgncId}`,
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ success: true })

    const deleted = await prisma.biomarker.findUnique({
      where: { hgncId: target.hgncId },
    })
    expect(deleted).toBeNull()
  })
})
