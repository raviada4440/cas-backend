import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincUniveralLabOrdersMinOrderByAggregateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersMinOrderByAggregateInput> = z.strictObject({
  loincNum: z.lazy(() => SortOrderSchema).optional(),
  longCommonName: z.lazy(() => SortOrderSchema).optional(),
  orderObs: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincUniveralLabOrdersMinOrderByAggregateInputSchema;
