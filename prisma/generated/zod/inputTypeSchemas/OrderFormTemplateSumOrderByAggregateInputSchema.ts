import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrderFormTemplateSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderFormTemplateSumOrderByAggregateInput> = z.strictObject({
  version: z.lazy(() => SortOrderSchema).optional(),
});

export default OrderFormTemplateSumOrderByAggregateInputSchema;
