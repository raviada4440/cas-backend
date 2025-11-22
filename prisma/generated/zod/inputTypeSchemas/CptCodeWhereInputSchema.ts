import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CptCodeWhereInputSchema: z.ZodType<Prisma.CptCodeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CptCodeWhereInputSchema), z.lazy(() => CptCodeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CptCodeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CptCodeWhereInputSchema), z.lazy(() => CptCodeWhereInputSchema).array() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  shortDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  longDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default CptCodeWhereInputSchema;
