import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

import { redisHelper } from './helper/redis-mock.helper'
import { prisma } from './lib/prisma'
import resetDb from './lib/reset-db'

dotenvExpand.expand(dotenv.config())

beforeAll(() => {})

beforeEach(async () => {
  await resetDb()
})

afterAll(async () => {
  await resetDb()
  await prisma.$disconnect()
  await (await redisHelper).close()
})
