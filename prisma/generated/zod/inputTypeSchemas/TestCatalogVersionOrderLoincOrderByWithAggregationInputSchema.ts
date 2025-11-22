import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TestCatalogVersionOrderLoincCountOrderByAggregateInputSchema } from './TestCatalogVersionOrderLoincCountOrderByAggregateInputSchema';
import { TestCatalogVersionOrderLoincMaxOrderByAggregateInputSchema } from './TestCatalogVersionOrderLoincMaxOrderByAggregateInputSchema';
import { TestCatalogVersionOrderLoincMinOrderByAggregateInputSchema } from './TestCatalogVersionOrderLoincMinOrderByAggregateInputSchema';

export const TestCatalogVersionOrderLoincOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogVersionOrderLoincCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogVersionOrderLoincMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogVersionOrderLoincMinOrderByAggregateInputSchema).optional(),
});

export default TestCatalogVersionOrderLoincOrderByWithAggregationInputSchema;
