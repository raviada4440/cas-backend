import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CptCodeWhereInputSchema } from './CptCodeWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CptCodeWhereUniqueInputSchema: z.ZodType<Prisma.CptCodeWhereUniqueInput> = z.object({
  code: z.string(),
})
.and(z.strictObject({
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => CptCodeWhereInputSchema), z.lazy(() => CptCodeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CptCodeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CptCodeWhereInputSchema), z.lazy(() => CptCodeWhereInputSchema).array() ]).optional(),
  shortDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  longDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
}));

export default CptCodeWhereUniqueInputSchema;
