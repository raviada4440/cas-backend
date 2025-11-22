import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincComponentHierarchySumOrderByAggregateInputSchema: z.ZodType<Prisma.LoincComponentHierarchySumOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincComponentHierarchySumOrderByAggregateInputSchema;
