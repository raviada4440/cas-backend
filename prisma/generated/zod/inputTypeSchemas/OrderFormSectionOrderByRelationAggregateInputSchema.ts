import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrderFormSectionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderFormSectionOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default OrderFormSectionOrderByRelationAggregateInputSchema;
