import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionCptCodeCountOrderByAggregateInputSchema } from './TestCatalogVersionCptCodeCountOrderByAggregateInputSchema';
import { TestCatalogVersionCptCodeMaxOrderByAggregateInputSchema } from './TestCatalogVersionCptCodeMaxOrderByAggregateInputSchema';
import { TestCatalogVersionCptCodeMinOrderByAggregateInputSchema } from './TestCatalogVersionCptCodeMinOrderByAggregateInputSchema';

export const TestCatalogVersionCptCodeOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  cptCode: z.lazy(() => SortOrderSchema).optional(),
  modifier: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogVersionCptCodeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogVersionCptCodeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogVersionCptCodeMinOrderByAggregateInputSchema).optional(),
});

export default TestCatalogVersionCptCodeOrderByWithAggregationInputSchema;
