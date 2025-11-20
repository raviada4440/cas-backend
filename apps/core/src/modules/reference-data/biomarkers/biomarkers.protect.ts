import { Prisma } from '@db/client'

export const BiomarkerSummarySelect = {
  hgncId: true,
  hgncApprovedSymbol: true,
  hgncApprovedName: true,
} satisfies Prisma.BiomarkerSelect

export const BiomarkerDetailSelect = {
  ...BiomarkerSummarySelect,
  hgncStatus: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.BiomarkerSelect

