import { Prisma } from '@db/client'

export const IcdSummarySelect = {
  id: true,
  code: true,
  shortDescription: true,
} satisfies Prisma.IcdSelect

export const IcdDetailSelect = {
  ...IcdSummarySelect,
  alias1: true,
  alias2: true,
  alias3: true,
  alias4: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.IcdSelect

