import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { makeOptionalPropsNullable } from '@core/shared/utils/zod.util'

const loincCodeSchema = z.string().trim().min(1).max(128)
const nullableString = () => z.string().trim().nullable()

const loincSummarySchema = z.object({
  loincNum: loincCodeSchema,
  longCommonName: nullableString(),
  shortname: nullableString(),
})

const loincDetailSchema = loincSummarySchema.extend({
  component: nullableString(),
  property: nullableString(),
  timeAspct: nullableString(),
  system: nullableString(),
  scaleTyp: nullableString(),
  methodTyp: nullableString(),
  class: nullableString(),
  status: nullableString(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

const loincSearchQuerySchema = z.object({
  search: z.string().trim().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: loincCodeSchema.optional(),
})

const loincCreateSchema = makeOptionalPropsNullable(
  z.object({
    loincNum: loincCodeSchema,
    longCommonName: nullableString().optional(),
    shortname: nullableString().optional(),
    component: nullableString().optional(),
    property: nullableString().optional(),
    timeAspct: nullableString().optional(),
    system: nullableString().optional(),
    scaleTyp: nullableString().optional(),
    methodTyp: nullableString().optional(),
    class: nullableString().optional(),
    status: nullableString().optional(),
  }),
)

const loincUpdateSchema = makeOptionalPropsNullable(
  z.object({
    longCommonName: nullableString().optional(),
    shortname: nullableString().optional(),
    component: nullableString().optional(),
    property: nullableString().optional(),
    timeAspct: nullableString().optional(),
    system: nullableString().optional(),
    scaleTyp: nullableString().optional(),
    methodTyp: nullableString().optional(),
    class: nullableString().optional(),
    status: nullableString().optional(),
  }),
)

export class LoincSearchQueryDto extends createZodDto(loincSearchQuerySchema) {}
export type LoincSearchQuery = z.infer<typeof loincSearchQuerySchema>

export class CreateLoincDto extends createZodDto(loincCreateSchema) {}
export type CreateLoincInput = z.infer<typeof loincCreateSchema>

export class UpdateLoincDto extends createZodDto(loincUpdateSchema) {}
export type UpdateLoincInput = z.infer<typeof loincUpdateSchema>

export class LoincCodeParamDto extends createZodDto(
  z.object({
    loincNum: loincCodeSchema,
  }),
) {}

export const LoincSearchResponseSchema = z.object({
  items: z.array(loincSummarySchema),
  nextCursor: loincCodeSchema.nullable(),
})
export type LoincSearchResponse = z.infer<typeof LoincSearchResponseSchema>

export type LoincSummary = z.infer<typeof loincSummarySchema>
export type LoincDetail = z.infer<typeof loincDetailSchema>

export const LoincSummarySchema = loincSummarySchema
export const LoincDetailSchema = loincDetailSchema

