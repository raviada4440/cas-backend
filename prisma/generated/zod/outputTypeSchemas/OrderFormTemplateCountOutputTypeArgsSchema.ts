import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateCountOutputTypeSelectSchema } from './OrderFormTemplateCountOutputTypeSelectSchema';

export const OrderFormTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.OrderFormTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OrderFormTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default OrderFormTemplateCountOutputTypeSelectSchema;
