import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';

export const OrderFormTemplateScalarRelationFilterSchema: z.ZodType<Prisma.OrderFormTemplateScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
  isNot: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
});

export default OrderFormTemplateScalarRelationFilterSchema;
