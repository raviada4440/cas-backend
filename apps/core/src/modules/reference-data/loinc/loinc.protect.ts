import { Prisma } from '@db/client'

export const LoincSummarySelect = {
  loincNum: true,
  longCommonName: true,
  shortname: true,
} satisfies Prisma.LoincSelect

export const LoincDetailSelect = {
  ...LoincSummarySelect,
  component: true,
  property: true,
  timeAspct: true,
  system: true,
  scaleTyp: true,
  methodTyp: true,
  class: true,
  status: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.LoincSelect
