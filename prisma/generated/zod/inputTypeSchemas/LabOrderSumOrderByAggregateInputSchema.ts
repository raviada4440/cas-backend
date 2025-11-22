import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderSumOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderSumOrderByAggregateInput> = z.strictObject({
  orderNumber: z.lazy(() => SortOrderSchema).optional(),
  accessionNumber: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderSumOrderByAggregateInputSchema;
