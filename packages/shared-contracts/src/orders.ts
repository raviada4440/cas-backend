import * as z from 'zod/v4'

import { Uuid, UtcDateTime } from './common'

export const OrderableTest = z.object({
  testId: Uuid,
  orderName: z.string(),
  versionId: Uuid,
  orderLoincs: z.array(
    z.object({
      loincCode: z.string(),
    }),
  ),
  requiredSpecimens: z.array(
    z.object({
      displayName: z.string(),
      minVolume: z.string().nullable(),
      container: z.string().nullable(),
    }),
  ),
  turnAroundTime: z.string().nullable(),
})
export type OrderableTest = z.infer<typeof OrderableTest>

export const OrderableQuery = z.object({
  customerId: Uuid.optional(),
  asOf: UtcDateTime.optional(),
  q: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
})
export type OrderableQuery = z.infer<typeof OrderableQuery>

