import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderFormSumOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderFormSumOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderFormSumOrderByAggregateInputSchema;
