import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { makeOptionalPropsNullable } from '@core/shared/utils/zod.util'

const nullableString = (max?: number) => {
  const schema = z.string().trim()
  return (max ? schema.max(max) : schema).nullable()
}

const hgncIdSchema = z.string().trim().min(1).max(20)

const biomarkerSummarySchema = z.object({
  hgncId: hgncIdSchema,
  hgncApprovedSymbol: nullableString(512),
  hgncApprovedName: nullableString(512),
})

const biomarkerDetailSchema = biomarkerSummarySchema.extend({
  hgncStatus: nullableString(128),
  createdAt: z.string(),
  updatedAt: z.string(),
})

const biomarkerSearchQuerySchema = z.object({
  search: z.string().trim().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().trim().min(1).optional(),
})

const biomarkerCreateSchema = makeOptionalPropsNullable(
  z.object({
    hgncId: hgncIdSchema,
    hgncStatus: nullableString(128).optional(),
    hgncApprovedSymbol: nullableString(512).optional(),
    hgncApprovedName: nullableString(512).optional(),
  }),
)

const biomarkerUpdateSchema = makeOptionalPropsNullable(
  z.object({
    hgncStatus: nullableString(128).optional(),
    hgncApprovedSymbol: nullableString(512).optional(),
    hgncApprovedName: nullableString(512).optional(),
  }),
)

export class BiomarkerSearchQueryDto extends createZodDto(biomarkerSearchQuerySchema) {}
export type BiomarkerSearchQuery = z.infer<typeof biomarkerSearchQuerySchema>

export class CreateBiomarkerDto extends createZodDto(biomarkerCreateSchema) {}
export type CreateBiomarkerInput = z.infer<typeof biomarkerCreateSchema>

export class UpdateBiomarkerDto extends createZodDto(biomarkerUpdateSchema) {}
export type UpdateBiomarkerInput = z.infer<typeof biomarkerUpdateSchema>

export class BiomarkerIdParamDto extends createZodDto(
  z.object({
    hgncId: hgncIdSchema,
  }),
) {}

export const BiomarkerSearchResponseSchema = z.object({
  items: z.array(biomarkerSummarySchema),
  nextCursor: z.string().nullable(),
})
export type BiomarkerSearchResponse = z.infer<typeof BiomarkerSearchResponseSchema>

export type BiomarkerSummary = z.infer<typeof biomarkerSummarySchema>
export type BiomarkerDetail = z.infer<typeof biomarkerDetailSchema>

export const BiomarkerSummarySchema = biomarkerSummarySchema
export const BiomarkerDetailSchema = biomarkerDetailSchema
