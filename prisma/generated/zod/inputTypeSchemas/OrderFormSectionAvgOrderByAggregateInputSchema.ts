import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrderFormSectionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderFormSectionAvgOrderByAggregateInput> = z.strictObject({
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default OrderFormSectionAvgOrderByAggregateInputSchema;
