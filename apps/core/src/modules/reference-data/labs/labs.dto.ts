import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { makeOptionalPropsNullable } from '@core/shared/utils/zod.util'

const uuid = () => z.string().uuid()
const nullableString = (max?: number) => {
  const schema = z.string().trim()
  return (max ? schema.max(max) : schema).nullable()
}

const labSummarySchema = z.object({
  id: uuid(),
  labName: nullableString(512),
  labCode: nullableString(2),
  city: nullableString(512),
  state: nullableString(512),
})

const labDetailSchema = labSummarySchema.extend({
  address: nullableString(512),
  zip: nullableString(512),
  createdAt: z.string(),
  updatedAt: z.string(),
})

const labMutationBaseSchema = makeOptionalPropsNullable(
  z.object({
    labName: nullableString(512).optional(),
    labCode: nullableString(2).optional(),
    address: nullableString(512).optional(),
    city: nullableString(512).optional(),
    state: nullableString(512).optional(),
    zip: nullableString(512).optional(),
  }),
)

const labSearchQuerySchema = z.object({
  search: z.string().trim().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: uuid().optional(),
})

export class LabSearchQueryDto extends createZodDto(labSearchQuerySchema) {}
export type LabSearchQuery = z.infer<typeof labSearchQuerySchema>

export class CreateLabDto extends createZodDto(labMutationBaseSchema) {}
export type CreateLabInput = z.infer<typeof labMutationBaseSchema>

const labUpdateSchema = labMutationBaseSchema
export class UpdateLabDto extends createZodDto(labUpdateSchema) {}
export type UpdateLabInput = z.infer<typeof labUpdateSchema>

export class LabIdParamDto extends createZodDto(
  z.object({
    labId: uuid(),
  }),
) {}

export const LabSearchResponseSchema = z.object({
  items: z.array(labSummarySchema),
  nextCursor: uuid().nullable(),
})
export type LabSearchResponse = z.infer<typeof LabSearchResponseSchema>

export type LabSummary = z.infer<typeof labSummarySchema>
export type LabDetail = z.infer<typeof labDetailSchema>

export const LabDetailSchema = labDetailSchema
export const LabSummarySchema = labSummarySchema
