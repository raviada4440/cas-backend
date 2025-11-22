import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OrderFormTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderFormTemplateCountOutputTypeSelect> = z.object({
  assignments: z.boolean().optional(),
  labOrderForms: z.boolean().optional(),
}).strict();

export default OrderFormTemplateCountOutputTypeSelectSchema;
