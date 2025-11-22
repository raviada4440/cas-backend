import { CreateBiomarkerInput } from '@core/modules/reference-data/biomarkers/biomarkers.dto'
import { BiomarkersModule } from '@core/modules/reference-data/biomarkers/biomarkers.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'

const createBiomarkerPayload = (
  overrides: Partial<CreateBiomarkerInput> = {},
): CreateBiomarkerInput => {
  const unique = Math.random().toString(36).slice(2, 10).toUpperCase()
  return {
    hgncId: `HGNC_${unique}`.slice(0, 20),
    hgncStatus: 'Approved',
    hgncApprovedSymbol: `SYM_${unique}`,
    hgncApprovedName: `Biomarker ${unique}`,
    ...overrides,
  }
}

describe('ROUTE /biomarkers', () => {
  const proxy = createE2EApp({
    imports: [BiomarkersModule],
  })

  it('GET /biomarkers should list biomarkers with pagination cursor', async () => {
    const target = createBiomarkerPayload()
    await prisma.biomarker.create({
      data: target,
    })
    await prisma.biomarker.create({
      data: createBiomarkerPayload(),
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/biomarkers',
      query: {
        search: target.hgncApprovedSymbol,
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toContainEqual({
      hgnc_id: target.hgncId,
      hgnc_approved_symbol: target.hgncApprovedSymbol,
      hgnc_approved_name: target.hgncApprovedName,
    })
    expect(body.next_cursor === null || typeof body.next_cursor === 'string').toBe(true)
  })

  it('GET /biomarkers/:hgncId should return biomarker detail', async () => {
    const target = await prisma.biomarker.create({
      data: createBiomarkerPayload(),
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/biomarkers/${target.hgncId}`,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      hgnc_id: target.hgncId,
      hgnc_approved_symbol: target.hgncApprovedSymbol,
      hgnc_approved_name: target.hgncApprovedName,
      hgnc_status: target.hgncStatus,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
  })

  it('POST /biomarkers should create a biomarker', async () => {
    const payload = createBiomarkerPayload()

    const response = await proxy.app.inject({
      method: 'POST',
      url: '/biomarkers',
      body: payload,
    })

    expect(response.statusCode).toBe(201)
    const body = response.json()
    expect(body).toMatchObject({
      hgnc_id: payload.hgncId,
      hgnc_approved_symbol: payload.hgncApprovedSymbol,
      hgnc_approved_name: payload.hgncApprovedName,
      hgnc_status: payload.hgncStatus,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')

    const stored = await prisma.biomarker.findUnique({
      where: { hgncId: payload.hgncId },
    })
    expect(stored).not.toBeNull()
  })

  it('PUT /biomarkers/:hgncId should update biomarker fields', async () => {
    const original = await prisma.biomarker.create({
      data: createBiomarkerPayload(),
    })

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/biomarkers/${original.hgncId}`,
      body: {
        hgncApprovedName: 'Updated Biomarker',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body.hgnc_approved_name).toBe('Updated Biomarker')

    const stored = await prisma.biomarker.findUnique({
      where: { hgncId: original.hgncId },
    })
    expect(stored?.hgncApprovedName).toBe('Updated Biomarker')
  })

  it('DELETE /biomarkers/:hgncId should delete biomarker', async () => {
    const target = await prisma.biomarker.create({
      data: createBiomarkerPayload(),
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/biomarkers/${target.hgncId}`,
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ success: true })

    const stored = await prisma.biomarker.findUnique({
      where: { hgncId: target.hgncId },
    })
    expect(stored).toBeNull()
  })
})
