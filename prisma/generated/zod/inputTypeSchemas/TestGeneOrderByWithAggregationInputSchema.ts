import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestGeneCountOrderByAggregateInputSchema } from './TestGeneCountOrderByAggregateInputSchema';
import { TestGeneMaxOrderByAggregateInputSchema } from './TestGeneMaxOrderByAggregateInputSchema';
import { TestGeneMinOrderByAggregateInputSchema } from './TestGeneMinOrderByAggregateInputSchema';

export const TestGeneOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestGeneOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  gene: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestGeneCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestGeneMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestGeneMinOrderByAggregateInputSchema).optional(),
});

export default TestGeneOrderByWithAggregationInputSchema;
