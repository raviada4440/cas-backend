import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionUpdateManyMutationInputSchema } from '../inputTypeSchemas/OrderFormSectionUpdateManyMutationInputSchema'
import { OrderFormSectionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OrderFormSectionUncheckedUpdateManyInputSchema'
import { OrderFormSectionWhereInputSchema } from '../inputTypeSchemas/OrderFormSectionWhereInputSchema'

export const OrderFormSectionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderFormSectionUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OrderFormSectionUpdateManyMutationInputSchema, OrderFormSectionUncheckedUpdateManyInputSchema ]),
  where: OrderFormSectionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrderFormSectionUpdateManyAndReturnArgsSchema;
