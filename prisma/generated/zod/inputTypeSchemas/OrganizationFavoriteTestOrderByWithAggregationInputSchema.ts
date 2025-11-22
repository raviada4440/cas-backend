import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OrganizationFavoriteTestCountOrderByAggregateInputSchema } from './OrganizationFavoriteTestCountOrderByAggregateInputSchema';
import { OrganizationFavoriteTestAvgOrderByAggregateInputSchema } from './OrganizationFavoriteTestAvgOrderByAggregateInputSchema';
import { OrganizationFavoriteTestMaxOrderByAggregateInputSchema } from './OrganizationFavoriteTestMaxOrderByAggregateInputSchema';
import { OrganizationFavoriteTestMinOrderByAggregateInputSchema } from './OrganizationFavoriteTestMinOrderByAggregateInputSchema';
import { OrganizationFavoriteTestSumOrderByAggregateInputSchema } from './OrganizationFavoriteTestSumOrderByAggregateInputSchema';

export const OrganizationFavoriteTestOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganizationFavoriteTestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrganizationFavoriteTestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganizationFavoriteTestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganizationFavoriteTestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrganizationFavoriteTestSumOrderByAggregateInputSchema).optional(),
});

export default OrganizationFavoriteTestOrderByWithAggregationInputSchema;
