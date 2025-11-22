import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderTestCountOrderByAggregateInputSchema } from './LabOrderTestCountOrderByAggregateInputSchema';
import { LabOrderTestMaxOrderByAggregateInputSchema } from './LabOrderTestMaxOrderByAggregateInputSchema';
import { LabOrderTestMinOrderByAggregateInputSchema } from './LabOrderTestMinOrderByAggregateInputSchema';

export const LabOrderTestOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderTestOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderTestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderTestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderTestMinOrderByAggregateInputSchema).optional(),
});

export default LabOrderTestOrderByWithAggregationInputSchema;
