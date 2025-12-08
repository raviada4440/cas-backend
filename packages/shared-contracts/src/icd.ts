import * as z from 'zod/v4'

import { Uuid, UtcDateTime } from './common'

export const IcdSummary = z.object({
  id: Uuid,
  code: z.string().nullable(),
  shortDescription: z.string().nullable(),
})
export type IcdSummary = z.infer<typeof IcdSummary>

export const IcdDetail = IcdSummary.extend({
  alias1: z.string().nullable(),
  alias2: z.string().nullable(),
  alias3: z.string().nullable(),
  alias4: z.string().nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type IcdDetail = z.infer<typeof IcdDetail>

export const IcdSearchParams = z.object({
  search: z.string().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
})
export type IcdSearchParams = z.infer<typeof IcdSearchParams>

export const IcdSearchResponse = z.object({
  items: z.array(IcdSummary),
  nextCursor: z.string().nullable(),
})
export type IcdSearchResponse = z.infer<typeof IcdSearchResponse>

export const CreateIcdInput = z.object({
  code: z.string().min(1).optional(),
  shortDescription: z.string().nullable().optional(),
  alias1: z.string().nullable().optional(),
  alias2: z.string().nullable().optional(),
  alias3: z.string().nullable().optional(),
  alias4: z.string().nullable().optional(),
})
export type CreateIcdInput = z.infer<typeof CreateIcdInput>

export const UpdateIcdInput = CreateIcdInput.partial()
export type UpdateIcdInput = z.infer<typeof UpdateIcdInput>

export const IcdIdParam = z.object({
  icdId: Uuid,
})
export type IcdIdParam = z.infer<typeof IcdIdParam>

