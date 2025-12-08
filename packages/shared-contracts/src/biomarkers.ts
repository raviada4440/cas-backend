import * as z from 'zod/v4'

import { UtcDateTime } from './common'

export const BiomarkerSummary = z.object({
  hgncId: z.string(),
  hgncApprovedSymbol: z.string().nullable(),
  hgncApprovedName: z.string().nullable(),
})
export type BiomarkerSummary = z.infer<typeof BiomarkerSummary>

export const BiomarkerDetail = BiomarkerSummary.extend({
  hgncStatus: z.string().nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type BiomarkerDetail = z.infer<typeof BiomarkerDetail>

export const BiomarkerSearchParams = z.object({
  search: z.string().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
})
export type BiomarkerSearchParams = z.infer<typeof BiomarkerSearchParams>

export const BiomarkerSearchResponse = z.object({
  items: z.array(BiomarkerSummary),
  nextCursor: z.string().nullable(),
})
export type BiomarkerSearchResponse = z.infer<typeof BiomarkerSearchResponse>

export const CreateBiomarkerInput = z.object({
  hgncId: z.string().min(1),
  hgncStatus: z.string().nullable().optional(),
  hgncApprovedSymbol: z.string().nullable().optional(),
  hgncApprovedName: z.string().nullable().optional(),
})
export type CreateBiomarkerInput = z.infer<typeof CreateBiomarkerInput>

export const UpdateBiomarkerInput = CreateBiomarkerInput.partial().extend({
  hgncId: z.string().min(1),
})
export type UpdateBiomarkerInput = z.infer<typeof UpdateBiomarkerInput>

export const BiomarkerIdParam = z.object({
  hgncId: z.string().min(1),
})
export type BiomarkerIdParam = z.infer<typeof BiomarkerIdParam>

