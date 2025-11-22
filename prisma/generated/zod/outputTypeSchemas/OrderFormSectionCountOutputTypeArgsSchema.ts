import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionCountOutputTypeSelectSchema } from './OrderFormSectionCountOutputTypeSelectSchema';

export const OrderFormSectionCountOutputTypeArgsSchema: z.ZodType<Prisma.OrderFormSectionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OrderFormSectionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default OrderFormSectionCountOutputTypeSelectSchema;
