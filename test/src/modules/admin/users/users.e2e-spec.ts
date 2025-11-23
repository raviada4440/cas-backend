import { AdminUsersModule } from '@core/modules/admin/users/users.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { randomUUID } from 'node:crypto'

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

describe('Admin Users', () => {
  const proxy = createE2EApp({
    imports: [AdminUsersModule],
  })

  const createUser = async (overrides: Record<string, unknown> = {}) => {
    const unique = randomUUID().slice(0, 8)
    return prisma.user.create({
      data: {
        email: `admin_user_${unique}@example.com`,
        name: `Admin User ${unique}`,
        password: 'hashed-password',
        userAttribute: {
          create: {
            userType: 'Admin',
          },
        },
        ...overrides,
      },
      include: {
        userAttribute: true,
      },
    })
  }

  it('GET /users should list users with optional search', async () => {
    const target = await createUser({ name: 'Search Target' })
    await createUser()

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/users',
      query: {
        search: 'Search Target',
        limit: '5',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: target.id,
          name: target.name,
          email: target.email,
        }),
      ]),
    )
  })

  it('GET /users/:userId should return user detail', async () => {
    const target = await createUser({ name: 'Detail Admin' })

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/users/${target.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body.id).toBe(target.id)
    expect(body.name).toBe('Detail Admin')
    expect(body.userAttribute?.userType).toBe('Admin')
  })
})
