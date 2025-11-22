import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';

export const OrderFormTemplateNullableScalarRelationFilterSchema: z.ZodType<Prisma.OrderFormTemplateNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => OrderFormTemplateWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => OrderFormTemplateWhereInputSchema).optional().nullable(),
});

export default OrderFormTemplateNullableScalarRelationFilterSchema;
