import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { makeOptionalPropsNullable } from '@core/shared/utils/zod.util'

const codeSchema = z.string().trim().min(1).max(10)
const nullableString = () => z.string().trim().nullable()

const cptSummarySchema = z.object({
  code: codeSchema,
  shortDescription: nullableString(),
})

const cptDetailSchema = cptSummarySchema.extend({
  longDescription: nullableString(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

const cptSearchQuerySchema = z.object({
  search: z.string().trim().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: codeSchema.optional(),
})

const cptCreateSchema = makeOptionalPropsNullable(
  z.object({
    code: codeSchema,
    shortDescription: nullableString().optional(),
    longDescription: nullableString().optional(),
  }),
)

const cptUpdateSchema = makeOptionalPropsNullable(
  z.object({
    shortDescription: nullableString().optional(),
    longDescription: nullableString().optional(),
  }),
)

export class CptSearchQueryDto extends createZodDto(cptSearchQuerySchema) {}
export type CptSearchQuery = z.infer<typeof cptSearchQuerySchema>

export class CreateCptDto extends createZodDto(cptCreateSchema) {}
export type CreateCptInput = z.infer<typeof cptCreateSchema>

export class UpdateCptDto extends createZodDto(cptUpdateSchema) {}
export type UpdateCptInput = z.infer<typeof cptUpdateSchema>

export class CptCodeParamDto extends createZodDto(
  z.object({
    code: codeSchema,
  }),
) {}

export const CptSearchResponseSchema = z.object({
  items: z.array(cptSummarySchema),
  nextCursor: codeSchema.nullable(),
})
export type CptSearchResponse = z.infer<typeof CptSearchResponseSchema>

export type CptSummary = z.infer<typeof cptSummarySchema>
export type CptDetail = z.infer<typeof cptDetailSchema>

export const CptSummarySchema = cptSummarySchema
export const CptDetailSchema = cptDetailSchema

