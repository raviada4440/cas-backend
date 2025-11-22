import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogCountOrderByAggregateInputSchema } from './TestCatalogCountOrderByAggregateInputSchema';
import { TestCatalogAvgOrderByAggregateInputSchema } from './TestCatalogAvgOrderByAggregateInputSchema';
import { TestCatalogMaxOrderByAggregateInputSchema } from './TestCatalogMaxOrderByAggregateInputSchema';
import { TestCatalogMinOrderByAggregateInputSchema } from './TestCatalogMinOrderByAggregateInputSchema';
import { TestCatalogSumOrderByAggregateInputSchema } from './TestCatalogSumOrderByAggregateInputSchema';

export const TestCatalogOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  casandraTestId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specialNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testSubCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  defaultVersionId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  currentVersion: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogSumOrderByAggregateInputSchema).optional(),
});

export default TestCatalogOrderByWithAggregationInputSchema;
