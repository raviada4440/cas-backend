import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

import { PrismaClient } from '@db/client'
import { createExtendedPrismaClient } from '@core/processors/database/prisma.instance'

dotenvExpand.expand(dotenv.config())

export const prisma: PrismaClient = createExtendedPrismaClient({
  url: process.env.DATABASE_URL,
}) as PrismaClient
