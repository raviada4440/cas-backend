import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionBiomarkerCountOrderByAggregateInputSchema } from './TestCatalogVersionBiomarkerCountOrderByAggregateInputSchema';
import { TestCatalogVersionBiomarkerMaxOrderByAggregateInputSchema } from './TestCatalogVersionBiomarkerMaxOrderByAggregateInputSchema';
import { TestCatalogVersionBiomarkerMinOrderByAggregateInputSchema } from './TestCatalogVersionBiomarkerMinOrderByAggregateInputSchema';

export const TestCatalogVersionBiomarkerOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogVersionBiomarkerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogVersionBiomarkerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogVersionBiomarkerMinOrderByAggregateInputSchema).optional(),
});

export default TestCatalogVersionBiomarkerOrderByWithAggregationInputSchema;
