import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabCountOrderByAggregateInputSchema } from './LabCountOrderByAggregateInputSchema';
import { LabMaxOrderByAggregateInputSchema } from './LabMaxOrderByAggregateInputSchema';
import { LabMinOrderByAggregateInputSchema } from './LabMinOrderByAggregateInputSchema';

export const LabOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  labCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  zip: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabMinOrderByAggregateInputSchema).optional(),
});

export default LabOrderByWithAggregationInputSchema;
