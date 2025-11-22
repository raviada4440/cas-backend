import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

import { createExtendedPrismaClient } from '@core/processors/database/prisma.instance'

dotenvExpand.expand(dotenv.config())

export const prisma = createExtendedPrismaClient({
  url: process.env.DATABASE_URL,
})
