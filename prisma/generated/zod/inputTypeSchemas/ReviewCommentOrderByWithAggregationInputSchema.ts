import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReviewCommentCountOrderByAggregateInputSchema } from './ReviewCommentCountOrderByAggregateInputSchema';
import { ReviewCommentMaxOrderByAggregateInputSchema } from './ReviewCommentMaxOrderByAggregateInputSchema';
import { ReviewCommentMinOrderByAggregateInputSchema } from './ReviewCommentMinOrderByAggregateInputSchema';

export const ReviewCommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReviewCommentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  threadId: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReviewCommentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReviewCommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReviewCommentMinOrderByAggregateInputSchema).optional(),
});

export default ReviewCommentOrderByWithAggregationInputSchema;
