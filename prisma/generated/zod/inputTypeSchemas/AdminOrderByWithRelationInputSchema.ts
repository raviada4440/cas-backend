import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserAttributeOrderByWithRelationInputSchema } from './UserAttributeOrderByWithRelationInputSchema';

export const AdminOrderByWithRelationInputSchema: z.ZodType<Prisma.AdminOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAttributeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userAttribute: z.lazy(() => UserAttributeOrderByWithRelationInputSchema).optional(),
});

export default AdminOrderByWithRelationInputSchema;
