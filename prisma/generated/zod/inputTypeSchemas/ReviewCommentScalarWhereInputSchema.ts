import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ReviewCommentScalarWhereInputSchema: z.ZodType<Prisma.ReviewCommentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ReviewCommentScalarWhereInputSchema), z.lazy(() => ReviewCommentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewCommentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewCommentScalarWhereInputSchema), z.lazy(() => ReviewCommentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  threadId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default ReviewCommentScalarWhereInputSchema;
