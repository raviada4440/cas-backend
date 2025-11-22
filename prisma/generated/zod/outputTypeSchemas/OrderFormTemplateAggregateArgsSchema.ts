import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateWhereInputSchema } from '../inputTypeSchemas/OrderFormTemplateWhereInputSchema'
import { OrderFormTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrderFormTemplateOrderByWithRelationInputSchema'
import { OrderFormTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/OrderFormTemplateWhereUniqueInputSchema'

export const OrderFormTemplateAggregateArgsSchema: z.ZodType<Prisma.OrderFormTemplateAggregateArgs> = z.object({
  where: OrderFormTemplateWhereInputSchema.optional(), 
  orderBy: z.union([ OrderFormTemplateOrderByWithRelationInputSchema.array(), OrderFormTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderFormTemplateWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrderFormTemplateAggregateArgsSchema;
