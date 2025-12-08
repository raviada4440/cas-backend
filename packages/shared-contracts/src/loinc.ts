import * as z from 'zod/v4'

import { UtcDateTime } from './common'

export const LoincSummary = z.object({
  loincNum: z.string(),
  longCommonName: z.string().nullable(),
  shortname: z.string().nullable(),
})
export type LoincSummary = z.infer<typeof LoincSummary>

export const LoincDetail = LoincSummary.extend({
  component: z.string().nullable(),
  property: z.string().nullable(),
  timeAspct: z.string().nullable(),
  system: z.string().nullable(),
  scaleTyp: z.string().nullable(),
  methodTyp: z.string().nullable(),
  class: z.string().nullable(),
  status: z.string().nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type LoincDetail = z.infer<typeof LoincDetail>

export const LoincSearchParams = z.object({
  search: z.string().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
})
export type LoincSearchParams = z.infer<typeof LoincSearchParams>

export const LoincSearchResponse = z.object({
  items: z.array(LoincSummary),
  nextCursor: z.string().nullable(),
})
export type LoincSearchResponse = z.infer<typeof LoincSearchResponse>

export const CreateLoincInput = z.object({
  loincNum: z.string().min(1),
  longCommonName: z.string().nullable().optional(),
  shortname: z.string().nullable().optional(),
  component: z.string().nullable().optional(),
  property: z.string().nullable().optional(),
  timeAspct: z.string().nullable().optional(),
  system: z.string().nullable().optional(),
  scaleTyp: z.string().nullable().optional(),
  methodTyp: z.string().nullable().optional(),
  class: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
})
export type CreateLoincInput = z.infer<typeof CreateLoincInput>

export const UpdateLoincInput = CreateLoincInput.partial().extend({
  loincNum: z.string().min(1),
})
export type UpdateLoincInput = z.infer<typeof UpdateLoincInput>

export const LoincCodeParam = z.object({
  loincNum: z.string().min(1),
})
export type LoincCodeParam = z.infer<typeof LoincCodeParam>

