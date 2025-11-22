import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincPanelHierarchySumOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchySumOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincPanelHierarchySumOrderByAggregateInputSchema;
