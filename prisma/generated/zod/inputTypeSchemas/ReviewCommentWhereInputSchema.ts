import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ReviewThreadScalarRelationFilterSchema } from './ReviewThreadScalarRelationFilterSchema';
import { ReviewThreadWhereInputSchema } from './ReviewThreadWhereInputSchema';

export const ReviewCommentWhereInputSchema: z.ZodType<Prisma.ReviewCommentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ReviewCommentWhereInputSchema), z.lazy(() => ReviewCommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewCommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewCommentWhereInputSchema), z.lazy(() => ReviewCommentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  threadId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  thread: z.union([ z.lazy(() => ReviewThreadScalarRelationFilterSchema), z.lazy(() => ReviewThreadWhereInputSchema) ]).optional(),
});

export default ReviewCommentWhereInputSchema;
