import { Prisma } from '@db/client'

export const LabSummarySelect = {
  id: true,
  labName: true,
  labCode: true,
  city: true,
  state: true,
} satisfies Prisma.LabSelect

export const LabDetailSelect = {
  id: true,
  labName: true,
  labCode: true,
  address: true,
  city: true,
  state: true,
  zip: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.LabSelect

