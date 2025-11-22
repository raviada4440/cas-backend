import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';

export const OrderFormTemplateListRelationFilterSchema: z.ZodType<Prisma.OrderFormTemplateListRelationFilter> = z.strictObject({
  every: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
  some: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
  none: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
});

export default OrderFormTemplateListRelationFilterSchema;
