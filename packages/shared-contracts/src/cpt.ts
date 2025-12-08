import * as z from 'zod/v4'

import { UtcDateTime } from './common'

export const CptSummary = z.object({
  code: z.string(),
  shortDescription: z.string().nullable(),
})
export type CptSummary = z.infer<typeof CptSummary>

export const CptDetail = CptSummary.extend({
  longDescription: z.string().nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type CptDetail = z.infer<typeof CptDetail>

export const CptSearchParams = z.object({
  search: z.string().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
})
export type CptSearchParams = z.infer<typeof CptSearchParams>

export const CptSearchResponse = z.object({
  items: z.array(CptSummary),
  nextCursor: z.string().nullable(),
})
export type CptSearchResponse = z.infer<typeof CptSearchResponse>

export const CreateCptInput = z.object({
  code: z.string().min(1),
  shortDescription: z.string().nullable().optional(),
  longDescription: z.string().nullable().optional(),
})
export type CreateCptInput = z.infer<typeof CreateCptInput>

export const UpdateCptInput = CreateCptInput.partial().extend({
  code: z.string().min(1),
})
export type UpdateCptInput = z.infer<typeof UpdateCptInput>

export const CptCodeParam = z.object({
  code: z.string().min(1),
})
export type CptCodeParam = z.infer<typeof CptCodeParam>

