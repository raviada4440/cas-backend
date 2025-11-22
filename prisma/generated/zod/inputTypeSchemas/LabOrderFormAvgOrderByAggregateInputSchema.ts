import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderFormAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderFormAvgOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderFormAvgOrderByAggregateInputSchema;
