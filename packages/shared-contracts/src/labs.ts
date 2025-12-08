import * as z from 'zod/v4'

import { Uuid, UtcDateTime } from './common'

export const LabSummary = z.object({
  id: Uuid,
  labName: z.string().nullable(),
  labCode: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
})
export type LabSummary = z.infer<typeof LabSummary>

export const LabDetail = LabSummary.extend({
  address: z.string().nullable(),
  zip: z.string().nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type LabDetail = z.infer<typeof LabDetail>

export const LabSearchParams = z.object({
  search: z.string().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
})
export type LabSearchParams = z.infer<typeof LabSearchParams>

export const LabSearchResponse = z.object({
  items: z.array(LabSummary),
  nextCursor: z.string().nullable(),
})
export type LabSearchResponse = z.infer<typeof LabSearchResponse>

export const CreateLabInput = z.object({
  labName: z.string().nullable().optional(),
  labCode: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  zip: z.string().nullable().optional(),
})
export type CreateLabInput = z.infer<typeof CreateLabInput>

export const UpdateLabInput = CreateLabInput.partial()
export type UpdateLabInput = z.infer<typeof UpdateLabInput>

export const LabIdParam = z.object({
  labId: Uuid,
})
export type LabIdParam = z.infer<typeof LabIdParam>

