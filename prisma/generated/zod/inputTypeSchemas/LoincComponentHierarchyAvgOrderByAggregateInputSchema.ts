import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincComponentHierarchyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyAvgOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincComponentHierarchyAvgOrderByAggregateInputSchema;
