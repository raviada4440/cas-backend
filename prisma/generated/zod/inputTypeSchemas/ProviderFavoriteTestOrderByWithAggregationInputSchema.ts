import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProviderFavoriteTestCountOrderByAggregateInputSchema } from './ProviderFavoriteTestCountOrderByAggregateInputSchema';
import { ProviderFavoriteTestAvgOrderByAggregateInputSchema } from './ProviderFavoriteTestAvgOrderByAggregateInputSchema';
import { ProviderFavoriteTestMaxOrderByAggregateInputSchema } from './ProviderFavoriteTestMaxOrderByAggregateInputSchema';
import { ProviderFavoriteTestMinOrderByAggregateInputSchema } from './ProviderFavoriteTestMinOrderByAggregateInputSchema';
import { ProviderFavoriteTestSumOrderByAggregateInputSchema } from './ProviderFavoriteTestSumOrderByAggregateInputSchema';

export const ProviderFavoriteTestOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProviderFavoriteTestOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProviderFavoriteTestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProviderFavoriteTestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProviderFavoriteTestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProviderFavoriteTestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProviderFavoriteTestSumOrderByAggregateInputSchema).optional(),
});

export default ProviderFavoriteTestOrderByWithAggregationInputSchema;
