import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { AdminOrderByWithRelationInputSchema } from './AdminOrderByWithRelationInputSchema';
import { ProviderOrderByWithRelationInputSchema } from './ProviderOrderByWithRelationInputSchema';

export const UserAttributeOrderByWithRelationInputSchema: z.ZodType<Prisma.UserAttributeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  admin: z.lazy(() => AdminOrderByWithRelationInputSchema).optional(),
  provider: z.lazy(() => ProviderOrderByWithRelationInputSchema).optional(),
});

export default UserAttributeOrderByWithRelationInputSchema;
