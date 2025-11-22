import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserIdentityCountOrderByAggregateInputSchema } from './UserIdentityCountOrderByAggregateInputSchema';
import { UserIdentityMaxOrderByAggregateInputSchema } from './UserIdentityMaxOrderByAggregateInputSchema';
import { UserIdentityMinOrderByAggregateInputSchema } from './UserIdentityMinOrderByAggregateInputSchema';

export const UserIdentityOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserIdentityOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  issuer: z.lazy(() => SortOrderSchema).optional(),
  subject: z.lazy(() => SortOrderSchema).optional(),
  fhirUser: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserIdentityCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserIdentityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserIdentityMinOrderByAggregateInputSchema).optional(),
});

export default UserIdentityOrderByWithAggregationInputSchema;
