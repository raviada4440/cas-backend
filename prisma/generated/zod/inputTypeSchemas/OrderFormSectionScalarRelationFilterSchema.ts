import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionWhereInputSchema } from './OrderFormSectionWhereInputSchema';

export const OrderFormSectionScalarRelationFilterSchema: z.ZodType<Prisma.OrderFormSectionScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => OrderFormSectionWhereInputSchema).optional(),
  isNot: z.lazy(() => OrderFormSectionWhereInputSchema).optional(),
});

export default OrderFormSectionScalarRelationFilterSchema;
