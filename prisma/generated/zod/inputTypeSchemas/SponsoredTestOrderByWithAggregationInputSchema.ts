import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SponsoredTestCountOrderByAggregateInputSchema } from './SponsoredTestCountOrderByAggregateInputSchema';
import { SponsoredTestMaxOrderByAggregateInputSchema } from './SponsoredTestMaxOrderByAggregateInputSchema';
import { SponsoredTestMinOrderByAggregateInputSchema } from './SponsoredTestMinOrderByAggregateInputSchema';

export const SponsoredTestOrderByWithAggregationInputSchema: z.ZodType<Prisma.SponsoredTestOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sponsoredProgramId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  labId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  casandraTestId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SponsoredTestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SponsoredTestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SponsoredTestMinOrderByAggregateInputSchema).optional(),
});

export default SponsoredTestOrderByWithAggregationInputSchema;
