import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CptCodeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CptCodeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CptCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => CptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CptCodeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CptCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => CptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  shortDescription: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  longDescription: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default CptCodeScalarWhereWithAggregatesInputSchema;
