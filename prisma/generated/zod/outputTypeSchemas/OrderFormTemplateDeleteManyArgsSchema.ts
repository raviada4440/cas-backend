import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateWhereInputSchema } from '../inputTypeSchemas/OrderFormTemplateWhereInputSchema'

export const OrderFormTemplateDeleteManyArgsSchema: z.ZodType<Prisma.OrderFormTemplateDeleteManyArgs> = z.object({
  where: OrderFormTemplateWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrderFormTemplateDeleteManyArgsSchema;
