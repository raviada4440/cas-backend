import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionResultLoincCountOrderByAggregateInputSchema } from './TestCatalogVersionResultLoincCountOrderByAggregateInputSchema';
import { TestCatalogVersionResultLoincMaxOrderByAggregateInputSchema } from './TestCatalogVersionResultLoincMaxOrderByAggregateInputSchema';
import { TestCatalogVersionResultLoincMinOrderByAggregateInputSchema } from './TestCatalogVersionResultLoincMinOrderByAggregateInputSchema';

export const TestCatalogVersionResultLoincOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  resultCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resultCodeName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  uom: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogVersionResultLoincCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogVersionResultLoincMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogVersionResultLoincMinOrderByAggregateInputSchema).optional(),
});

export default TestCatalogVersionResultLoincOrderByWithAggregationInputSchema;
