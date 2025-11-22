import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderIcdCountOrderByAggregateInputSchema } from './LabOrderIcdCountOrderByAggregateInputSchema';
import { LabOrderIcdMaxOrderByAggregateInputSchema } from './LabOrderIcdMaxOrderByAggregateInputSchema';
import { LabOrderIcdMinOrderByAggregateInputSchema } from './LabOrderIcdMinOrderByAggregateInputSchema';

export const LabOrderIcdOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderIcdOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  icdId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderIcdCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderIcdMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderIcdMinOrderByAggregateInputSchema).optional(),
});

export default LabOrderIcdOrderByWithAggregationInputSchema;
