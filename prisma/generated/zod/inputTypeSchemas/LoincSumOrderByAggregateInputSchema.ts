import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincSumOrderByAggregateInputSchema: z.ZodType<Prisma.LoincSumOrderByAggregateInput> = z.strictObject({
  classtype: z.lazy(() => SortOrderSchema).optional(),
  commonTestRank: z.lazy(() => SortOrderSchema).optional(),
  commonOrderRank: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincSumOrderByAggregateInputSchema;
