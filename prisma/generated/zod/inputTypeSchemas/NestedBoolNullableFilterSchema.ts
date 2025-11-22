import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.strictObject({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
});

export default NestedBoolNullableFilterSchema;
