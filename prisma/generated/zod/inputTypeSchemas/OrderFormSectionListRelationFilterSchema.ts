import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionWhereInputSchema } from './OrderFormSectionWhereInputSchema';

export const OrderFormSectionListRelationFilterSchema: z.ZodType<Prisma.OrderFormSectionListRelationFilter> = z.strictObject({
  every: z.lazy(() => OrderFormSectionWhereInputSchema).optional(),
  some: z.lazy(() => OrderFormSectionWhereInputSchema).optional(),
  none: z.lazy(() => OrderFormSectionWhereInputSchema).optional(),
});

export default OrderFormSectionListRelationFilterSchema;
