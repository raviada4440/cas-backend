import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionOrderFormCountOrderByAggregateInputSchema } from './TestCatalogVersionOrderFormCountOrderByAggregateInputSchema';
import { TestCatalogVersionOrderFormAvgOrderByAggregateInputSchema } from './TestCatalogVersionOrderFormAvgOrderByAggregateInputSchema';
import { TestCatalogVersionOrderFormMaxOrderByAggregateInputSchema } from './TestCatalogVersionOrderFormMaxOrderByAggregateInputSchema';
import { TestCatalogVersionOrderFormMinOrderByAggregateInputSchema } from './TestCatalogVersionOrderFormMinOrderByAggregateInputSchema';
import { TestCatalogVersionOrderFormSumOrderByAggregateInputSchema } from './TestCatalogVersionOrderFormSumOrderByAggregateInputSchema';

export const TestCatalogVersionOrderFormOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderFormTemplateId: z.lazy(() => SortOrderSchema).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  customTitle: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  isVisible: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogVersionOrderFormCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogVersionOrderFormAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogVersionOrderFormMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogVersionOrderFormMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogVersionOrderFormSumOrderByAggregateInputSchema).optional(),
});

export default TestCatalogVersionOrderFormOrderByWithAggregationInputSchema;
