import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LoincUniveralLabOrdersCountOrderByAggregateInputSchema } from './LoincUniveralLabOrdersCountOrderByAggregateInputSchema';
import { LoincUniveralLabOrdersMaxOrderByAggregateInputSchema } from './LoincUniveralLabOrdersMaxOrderByAggregateInputSchema';
import { LoincUniveralLabOrdersMinOrderByAggregateInputSchema } from './LoincUniveralLabOrdersMinOrderByAggregateInputSchema';

export const LoincUniveralLabOrdersOrderByWithAggregationInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersOrderByWithAggregationInput> = z.strictObject({
  loincNum: z.lazy(() => SortOrderSchema).optional(),
  longCommonName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderObs: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LoincUniveralLabOrdersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LoincUniveralLabOrdersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LoincUniveralLabOrdersMinOrderByAggregateInputSchema).optional(),
});

export default LoincUniveralLabOrdersOrderByWithAggregationInputSchema;
