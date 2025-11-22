import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserAttributeCountOrderByAggregateInputSchema } from './UserAttributeCountOrderByAggregateInputSchema';
import { UserAttributeMaxOrderByAggregateInputSchema } from './UserAttributeMaxOrderByAggregateInputSchema';
import { UserAttributeMinOrderByAggregateInputSchema } from './UserAttributeMinOrderByAggregateInputSchema';

export const UserAttributeOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserAttributeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserAttributeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserAttributeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserAttributeMinOrderByAggregateInputSchema).optional(),
});

export default UserAttributeOrderByWithAggregationInputSchema;
