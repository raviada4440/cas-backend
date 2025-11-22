import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderBillingSumOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderBillingSumOrderByAggregateInput> = z.strictObject({
  copayAmount: z.lazy(() => SortOrderSchema).optional(),
  deductibleAmount: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderBillingSumOrderByAggregateInputSchema;
