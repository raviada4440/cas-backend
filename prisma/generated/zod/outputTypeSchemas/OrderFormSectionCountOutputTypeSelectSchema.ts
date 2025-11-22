import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OrderFormSectionCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderFormSectionCountOutputTypeSelect> = z.object({
  templates: z.boolean().optional(),
}).strict();

export default OrderFormSectionCountOutputTypeSelectSchema;
