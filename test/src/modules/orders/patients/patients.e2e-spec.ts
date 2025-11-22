import { PatientsModule } from '@core/modules/orders/patients/patients.module'
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

const createPatientPayload = (overrides: Record<string, unknown> = {}) => {
  const unique = Math.random().toString(36).slice(2, 10)
  return {
    firstName: `Test${unique}`,
    lastName: 'Patient',
    email: `patient_${unique}@example.com`,
    mobile: '555-1000',
    gender: 'female',
    dateOfBirth: new Date('1990-01-01').toISOString(),
    ...overrides,
  }
}

describe('ROUTE /patients', () => {
  const proxy = createE2EApp({
    imports: [PatientsModule],
  })

  it('POST /patients should create a patient', async () => {
    const payload = createPatientPayload()
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/patients',
      body: payload,
    })

    expect(response.statusCode).toBe(201)
    const body = camelize(response.json())
    expect(body.firstName).toBe(payload.firstName)
    expect(body.email).toBe(payload.email)
    expect(typeof body.createdAt).toBe('string')
  })

  it('GET /patients should list patients', async () => {
    const payload = createPatientPayload({ firstName: 'Searchable' })
    await proxy.app.inject({
      method: 'POST',
      url: '/patients',
      body: payload,
    })

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/patients',
      query: {
        search: 'Searchable',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          firstName: 'Searchable',
        }),
      ]),
    )
    expect(body.nextCursor).toBeNull()
  })

  it('GET /patients/:patientId should return detail', async () => {
    const payload = createPatientPayload({ firstName: 'Detail' })
    const createResponse = await proxy.app.inject({
      method: 'POST',
      url: '/patients',
      body: payload,
    })
    const created = camelize(createResponse.json())

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/patients/${created.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.id).toBe(created.id)
    expect(body.firstName).toBe('Detail')
    expect(body.dateOfBirth).toBe(payload.dateOfBirth)
  })

  it('PUT /patients/:patientId should update patient fields', async () => {
    const payload = createPatientPayload({ firstName: 'Original' })
    const createResponse = await proxy.app.inject({
      method: 'POST',
      url: '/patients',
      body: payload,
    })
    const created = camelize(createResponse.json())

    const updateResponse = await proxy.app.inject({
      method: 'PUT',
      url: `/patients/${created.id}`,
      body: {
        firstName: 'Updated',
        email: 'updated@example.com',
      },
    })

    expect(updateResponse.statusCode).toBe(200)
    const updated = camelize(updateResponse.json())
    expect(updated.firstName).toBe('Updated')
    expect(updated.email).toBe('updated@example.com')
  })

  it('DELETE /patients/:patientId should remove the patient', async () => {
    const payload = createPatientPayload()
    const createResponse = await proxy.app.inject({
      method: 'POST',
      url: '/patients',
      body: payload,
    })
    const created = camelize(createResponse.json())

    const deleteResponse = await proxy.app.inject({
      method: 'DELETE',
      url: `/patients/${created.id}`,
    })

    expect(deleteResponse.statusCode).toBe(200)
    expect(camelize(deleteResponse.json())).toEqual({ success: true })

    const stored = await prisma.patient.findUnique({ where: { id: created.id } })
    expect(stored).toBeNull()
  })
})


