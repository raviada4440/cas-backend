import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionWhereInputSchema } from '../inputTypeSchemas/OrderFormSectionWhereInputSchema'

export const OrderFormSectionDeleteManyArgsSchema: z.ZodType<Prisma.OrderFormSectionDeleteManyArgs> = z.object({
  where: OrderFormSectionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrderFormSectionDeleteManyArgsSchema;
