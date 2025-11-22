import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { makeOptionalPropsNullable } from '@core/shared/utils/zod.util'

const uuid = () => z.string().uuid()
const nullableString = (max?: number) => {
  const schema = z.string().trim()
  return (max ? schema.max(max) : schema).nullable()
}

const icdSummarySchema = z.object({
  id: uuid(),
  code: nullableString(45),
  shortDescription: nullableString(),
})

const icdDetailSchema = icdSummarySchema.extend({
  alias1: nullableString(512),
  alias2: nullableString(512),
  alias3: nullableString(512),
  alias4: nullableString(512),
  createdAt: z.string(),
  updatedAt: z.string(),
})

const icdSearchQuerySchema = z.object({
  search: z.string().trim().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: uuid().optional(),
})

const icdCreateSchema = makeOptionalPropsNullable(
  z.object({
    code: z.string().trim().min(1).max(45).optional(),
    shortDescription: nullableString().optional(),
    alias1: nullableString(512).optional(),
    alias2: nullableString(512).optional(),
    alias3: nullableString(512).optional(),
    alias4: nullableString(512).optional(),
  }),
)

const icdUpdateSchema = makeOptionalPropsNullable(
  z.object({
    code: z.string().trim().min(1).max(45).optional(),
    shortDescription: nullableString().optional(),
    alias1: nullableString(512).optional(),
    alias2: nullableString(512).optional(),
    alias3: nullableString(512).optional(),
    alias4: nullableString(512).optional(),
  }),
)

export class IcdSearchQueryDto extends createZodDto(icdSearchQuerySchema) {}
export type IcdSearchQuery = z.infer<typeof icdSearchQuerySchema>

export class CreateIcdDto extends createZodDto(icdCreateSchema) {}
export type CreateIcdInput = z.infer<typeof icdCreateSchema>

export class UpdateIcdDto extends createZodDto(icdUpdateSchema) {}
export type UpdateIcdInput = z.infer<typeof icdUpdateSchema>

export class IcdIdParamDto extends createZodDto(
  z.object({
    icdId: uuid(),
  }),
) {}

export const IcdSearchResponseSchema = z.object({
  items: z.array(icdSummarySchema),
  nextCursor: uuid().nullable(),
})
export type IcdSearchResponse = z.infer<typeof IcdSearchResponseSchema>

export type IcdSummary = z.infer<typeof icdSummarySchema>
export type IcdDetail = z.infer<typeof icdDetailSchema>

export const IcdSummarySchema = icdSummarySchema
export const IcdDetailSchema = icdDetailSchema
