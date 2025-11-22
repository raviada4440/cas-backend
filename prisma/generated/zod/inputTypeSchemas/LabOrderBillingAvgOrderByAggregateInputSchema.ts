import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderBillingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderBillingAvgOrderByAggregateInput> = z.strictObject({
  copayAmount: z.lazy(() => SortOrderSchema).optional(),
  deductibleAmount: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderBillingAvgOrderByAggregateInputSchema;
