import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionWhereInputSchema } from '../inputTypeSchemas/OrderFormSectionWhereInputSchema'
import { OrderFormSectionOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrderFormSectionOrderByWithRelationInputSchema'
import { OrderFormSectionWhereUniqueInputSchema } from '../inputTypeSchemas/OrderFormSectionWhereUniqueInputSchema'

export const OrderFormSectionAggregateArgsSchema: z.ZodType<Prisma.OrderFormSectionAggregateArgs> = z.object({
  where: OrderFormSectionWhereInputSchema.optional(), 
  orderBy: z.union([ OrderFormSectionOrderByWithRelationInputSchema.array(), OrderFormSectionOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderFormSectionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrderFormSectionAggregateArgsSchema;
