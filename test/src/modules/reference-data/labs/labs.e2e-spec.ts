import { CreateLabInput } from '@core/modules/reference-data/labs/labs.dto'
import { LabsModule } from '@core/modules/reference-data/labs/labs.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'

const buildLabPayload = (overrides: Partial<CreateLabInput> = {}): CreateLabInput => {
  const unique = Math.random().toString(36).slice(2, 8).toUpperCase()
  return {
    labName: `Lab ${unique}`,
    labCode: unique.slice(0, 2),
    address: `${unique} Main Street`,
    city: `City ${unique}`,
    state: 'CA',
    zip: `9${unique.slice(0, 4).padEnd(4, '0')}`,
    ...overrides,
  }
}

describe('ROUTE /labs', () => {
  const proxy = createE2EApp({
    imports: [LabsModule],
  })

  it('GET /labs should list labs with pagination cursor', async () => {
    const target = await prisma.lab.create({
      data: buildLabPayload(),
    })
    await prisma.lab.create({
      data: buildLabPayload(),
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/labs',
      query: {
        search: target.labName ?? '',
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
      data: buildLabPayload(),
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
    const payload = buildLabPayload()

    const response = await proxy.app.inject({
      method: 'POST',
      url: '/labs',
      body: payload,
    })

    expect(response.statusCode).toBe(201)
    const body = response.json()
    expect(body).toMatchObject({
      lab_name: payload.labName,
      lab_code: payload.labCode,
      address: payload.address,
      city: payload.city,
      state: payload.state,
      zip: payload.zip,
    })
    expect(body.id).toBeDefined()
    expect(typeof body.created_at).toBe('string')
    expect(typeof body.updated_at).toBe('string')
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
      where: { id: record.id },
    })
    expect(stored?.labName).toBe(updatePayload.labName)
    expect(stored?.city).toBe(updatePayload.city)
  })

  it('DELETE /labs/:labId should delete a lab', async () => {
    const record = await prisma.lab.create({
      data: buildLabPayload(),
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
