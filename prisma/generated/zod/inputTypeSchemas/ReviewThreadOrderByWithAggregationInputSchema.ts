import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ReviewThreadCountOrderByAggregateInputSchema } from './ReviewThreadCountOrderByAggregateInputSchema';
import { ReviewThreadMaxOrderByAggregateInputSchema } from './ReviewThreadMaxOrderByAggregateInputSchema';
import { ReviewThreadMinOrderByAggregateInputSchema } from './ReviewThreadMinOrderByAggregateInputSchema';

export const ReviewThreadOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReviewThreadOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  resolvedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ReviewThreadCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReviewThreadMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReviewThreadMinOrderByAggregateInputSchema).optional(),
});

export default ReviewThreadOrderByWithAggregationInputSchema;
