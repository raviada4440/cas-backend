import { TestsModule } from '@core/modules/catalog/tests/tests.module'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { $Enums } from '@db/client'
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

const createTestCatalogFixture = async () => {
  const unique = randomUUID().slice(0, 8)

  const lab = await prisma.lab.create({
    data: {
      labName: `Lab ${unique}`,
      labCode: unique.slice(0, 2),
      city: 'Austin',
      state: 'TX',
    },
  })

  const test = await prisma.testCatalog.create({
    data: {
      labId: lab.id,
      casandraTestId: `CAS-${unique}`,
      labTestId: `LAB-${unique}`,
      testName: `Test ${unique}`,
      testCategory: 'Oncology',
      testSubCategory: 'Somatic',
      status: $Enums.TestCatalogStatus.DRAFT,
    },
  })

  const version = await prisma.testCatalogVersion.create({
    data: {
      testId: test.id,
      versionNumber: 1,
      status: $Enums.TestCatalogVersionStatus.DRAFT,
      methodology: 'Immunoassay',
      turnAroundTime: '48 hours',
    },
  })

  await prisma.testCatalog.update({
    where: { id: test.id },
    data: { defaultVersionId: version.id },
  })

  return { lab, test, version }
}

describe('ROUTE /tests', () => {
  const proxy = createE2EApp({
    imports: [TestsModule],
  })

  it('GET /tests should list catalog tests with pagination cursor', async () => {
    const { lab, test } = await createTestCatalogFixture()

    const response = await proxy.app.inject({
      method: 'GET',
      url: '/tests',
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.items)).toBe(true)
    expect(body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          testId: test.id,
          testName: test.testName,
          labName: lab.labName,
          status: 'DRAFT',
          casandraTestId: test.casandraTestId,
          defaultVersion: 1,
          versionsCount: 1,
        }),
      ]),
    )
    expect(body.nextCursor).toBeNull()
  })

  it('GET /tests/:testId should return detailed test payload', async () => {
    const { lab, test, version } = await createTestCatalogFixture()

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/tests/${test.id}`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(body).toMatchObject({
      testId: test.id,
      testName: test.testName,
      labId: lab.id,
      status: 'DRAFT',
      version: expect.objectContaining({
        id: version.id,
        versionNumber: 1,
        status: 'DRAFT',
        methodology: 'Immunoassay',
        turnAroundTime: '48 hours',
      }),
    })
  })

  it('GET /tests/:testId/versions should list versions for a test', async () => {
    const { test, version } = await createTestCatalogFixture()

    const response = await proxy.app.inject({
      method: 'GET',
      url: `/tests/${test.id}/versions`,
    })

    expect(response.statusCode).toBe(200)
    const body = camelize(response.json())
    expect(Array.isArray(body.data)).toBe(true)
    expect(body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: version.id,
          versionNumber: 1,
          status: 'DRAFT',
          isDefault: true,
        }),
      ]),
    )
  })

  it('POST /tests/:testId/versions/draft should create a new draft version', async () => {
    const { test } = await createTestCatalogFixture()

    const response = await proxy.app.inject({
      method: 'POST',
      url: `/tests/${test.id}/versions/draft`,
      body: {
        changeReason: 'Initial draft for QA',
      },
    })

    expect(response.statusCode).toBe(201)
    const body = camelize(response.json())
    expect(body.versionNumber).toBe(2)
    expect(body.status).toBe('DRAFT')
    expect(body.changeReason).toBe('Initial draft for QA')

    const versions = await prisma.testCatalogVersion.findMany({
      where: { testId: test.id },
      orderBy: { versionNumber: 'asc' },
    })
    expect(versions.map((item) => item.versionNumber)).toEqual([1, 2])
  })
})
