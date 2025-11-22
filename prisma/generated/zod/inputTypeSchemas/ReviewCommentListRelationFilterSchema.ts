import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentWhereInputSchema } from './ReviewCommentWhereInputSchema';

export const ReviewCommentListRelationFilterSchema: z.ZodType<Prisma.ReviewCommentListRelationFilter> = z.strictObject({
  every: z.lazy(() => ReviewCommentWhereInputSchema).optional(),
  some: z.lazy(() => ReviewCommentWhereInputSchema).optional(),
  none: z.lazy(() => ReviewCommentWhereInputSchema).optional(),
});

export default ReviewCommentListRelationFilterSchema;
