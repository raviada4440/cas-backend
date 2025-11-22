import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ReviewThreadScalarWhereInputSchema: z.ZodType<Prisma.ReviewThreadScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ReviewThreadScalarWhereInputSchema), z.lazy(() => ReviewThreadScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewThreadScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewThreadScalarWhereInputSchema), z.lazy(() => ReviewThreadScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  resolvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export default ReviewThreadScalarWhereInputSchema;
