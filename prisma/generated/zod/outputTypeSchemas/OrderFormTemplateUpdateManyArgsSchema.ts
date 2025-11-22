import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/OrderFormTemplateUpdateManyMutationInputSchema'
import { OrderFormTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OrderFormTemplateUncheckedUpdateManyInputSchema'
import { OrderFormTemplateWhereInputSchema } from '../inputTypeSchemas/OrderFormTemplateWhereInputSchema'

export const OrderFormTemplateUpdateManyArgsSchema: z.ZodType<Prisma.OrderFormTemplateUpdateManyArgs> = z.object({
  data: z.union([ OrderFormTemplateUpdateManyMutationInputSchema, OrderFormTemplateUncheckedUpdateManyInputSchema ]),
  where: OrderFormTemplateWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrderFormTemplateUpdateManyArgsSchema;
