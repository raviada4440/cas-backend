import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrderFormTemplateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderFormTemplateAvgOrderByAggregateInput> = z.strictObject({
  version: z.lazy(() => SortOrderSchema).optional(),
});

export default OrderFormTemplateAvgOrderByAggregateInputSchema;
