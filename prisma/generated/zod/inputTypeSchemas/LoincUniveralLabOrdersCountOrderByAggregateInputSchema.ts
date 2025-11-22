import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincUniveralLabOrdersCountOrderByAggregateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCountOrderByAggregateInput> = z.strictObject({
  loincNum: z.lazy(() => SortOrderSchema).optional(),
  longCommonName: z.lazy(() => SortOrderSchema).optional(),
  orderObs: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincUniveralLabOrdersCountOrderByAggregateInputSchema;
