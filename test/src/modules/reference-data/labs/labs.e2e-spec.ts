import { LabsModule } from '@core/modules/reference-data/labs/labs.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { Prisma } from '@db/client'

type LabSeed = {
  labCode: string
  labName: string
  address: string | null
  city: string | null
  state: string | null
  zip: string | null
}

const buildLabPayload = (overrides: Partial<LabSeed> = {}) => {
  const unique = Math.random().toString(36).slice(2, 10).toUpperCase()
  const snapshot: LabSeed = {
    labCode: unique.slice(0, 2),
    labName: `Lab ${unique}`,
    address: '123 Lab St',
    city: 'Austin',
    state: 'TX',
    zip: '73301',
    ...overrides,
  }
  return {
    data: snapshot as Prisma.LabCreateInput,
    snapshot,
  }
}

describe('ROUTE /labs', () => {
  const proxy = createE2EApp({
    imports: [LabsModule],
  })

  it('GET /labs should list labs with pagination cursor', async () => {
    const first = buildLabPayload()
    const target = await prisma.lab.create({
      data: first.data,
    })
    await prisma.lab.create({
      data: buildLabPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/labs',
      query: {
        search: first.snapshot.labName ?? '',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: target.id,
          lab_name: target.labName,
          lab_code: target.labCode,
        }),
      ]),
    )
    expect(body.next_cursor === null || typeof body.next_cursor === 'string').toBe(true)
  })

  it('GET /labs/:labId should return lab detail', async () => {
    const record = await prisma.lab.create({
      data: buildLabPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/labs/${record.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      id: record.id,
      lab_name: record.labName,
      lab_code: record.labCode,
      address: record.address,
      city: record.city,
      state: record.state,
      zip: record.zip,
    })
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
  })

  it('POST /labs should create a lab', async () => {
    const { data: payload, snapshot } = buildLabPayload()

    const response = await proxy.app.inject({
      method: 'POST',
      url: '/labs',
      body: snapshot,
    })

    expect(response.statusCode).toBe(201)
    const body = response.json()
    expect(body).toMatchObject({
      lab_name: snapshot.labName,
      lab_code: snapshot.labCode,
      address: snapshot.address,
      city: snapshot.city,
      state: snapshot.state,
      zip: snapshot.zip,
    })
    expect(body.id).toBeDefined()
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')

    const stored = await prisma.lab.findUnique({
      where: { id: body.id },
    })
    expect(stored).not.toBeNull()
  })

  it('PUT /labs/:labId should update a lab', async () => {
    const record = await prisma.lab.create({
      data: buildLabPayload(),
    })
    const updatePayload = {
      labName: 'Updated Lab Name',
      city: 'Updated City',
    }

    const response = await proxy.app.inject({
      method: 'PUT',
      url: `/labs/${record.id}`,
      body: updatePayload,
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body.lab_name).toBe(updatePayload.labName)
    expect(body.city).toBe(updatePayload.city)

    const stored = await prisma.lab.findUnique({
      where: { id: response.json().id },
    })
    expect(stored).not.toBeNull()
  })

  it('DELETE /labs/:labId should delete a lab', async () => {
    const record = await prisma.lab.create({
      data: buildLabPayload().data,
    })

    const response = await proxy.app.inject({
      method: 'DELETE',
      url: `/labs/${record.id}`,
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ success: true })

    const deleted = await prisma.lab.findUnique({
      where: { id: record.id },
    })
    expect(deleted).toBeNull()
  })
})
