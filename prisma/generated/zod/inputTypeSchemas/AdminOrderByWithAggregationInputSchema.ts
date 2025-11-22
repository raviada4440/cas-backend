import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AdminCountOrderByAggregateInputSchema } from './AdminCountOrderByAggregateInputSchema';
import { AdminMaxOrderByAggregateInputSchema } from './AdminMaxOrderByAggregateInputSchema';
import { AdminMinOrderByAggregateInputSchema } from './AdminMinOrderByAggregateInputSchema';

export const AdminOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdminOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAttributeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AdminCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AdminMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AdminMinOrderByAggregateInputSchema).optional(),
});

export default AdminOrderByWithAggregationInputSchema;
