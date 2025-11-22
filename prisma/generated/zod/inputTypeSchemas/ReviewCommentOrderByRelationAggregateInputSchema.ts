import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReviewCommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReviewCommentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ReviewCommentOrderByRelationAggregateInputSchema;
