import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LoincAvgOrderByAggregateInput> = z.strictObject({
  classtype: z.lazy(() => SortOrderSchema).optional(),
  commonTestRank: z.lazy(() => SortOrderSchema).optional(),
  commonOrderRank: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincAvgOrderByAggregateInputSchema;
