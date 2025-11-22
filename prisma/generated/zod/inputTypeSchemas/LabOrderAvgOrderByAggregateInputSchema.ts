import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderAvgOrderByAggregateInput> = z.strictObject({
  orderNumber: z.lazy(() => SortOrderSchema).optional(),
  accessionNumber: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderAvgOrderByAggregateInputSchema;
