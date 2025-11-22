import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrderFormSectionSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderFormSectionSumOrderByAggregateInput> = z.strictObject({
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default OrderFormSectionSumOrderByAggregateInputSchema;
