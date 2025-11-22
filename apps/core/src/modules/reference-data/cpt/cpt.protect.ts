import { Prisma } from '@db/client'

export const CptSummarySelect = {
  code: true,
  shortDescription: true,
} satisfies Prisma.CptCodeSelect

export const CptDetailSelect = {
  ...CptSummarySelect,
  longDescription: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.CptCodeSelect
