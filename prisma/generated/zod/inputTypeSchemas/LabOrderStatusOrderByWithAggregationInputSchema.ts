import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderStatusCountOrderByAggregateInputSchema } from './LabOrderStatusCountOrderByAggregateInputSchema';
import { LabOrderStatusMaxOrderByAggregateInputSchema } from './LabOrderStatusMaxOrderByAggregateInputSchema';
import { LabOrderStatusMinOrderByAggregateInputSchema } from './LabOrderStatusMinOrderByAggregateInputSchema';

export const LabOrderStatusOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderStatusOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  statusDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderStatusCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderStatusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderStatusMinOrderByAggregateInputSchema).optional(),
});

export default LabOrderStatusOrderByWithAggregationInputSchema;
