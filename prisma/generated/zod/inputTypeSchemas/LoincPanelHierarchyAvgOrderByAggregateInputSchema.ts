import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincPanelHierarchyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyAvgOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default LoincPanelHierarchyAvgOrderByAggregateInputSchema;
