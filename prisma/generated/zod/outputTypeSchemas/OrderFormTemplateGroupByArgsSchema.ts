import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateWhereInputSchema } from '../inputTypeSchemas/OrderFormTemplateWhereInputSchema'
import { OrderFormTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OrderFormTemplateOrderByWithAggregationInputSchema'
import { OrderFormTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/OrderFormTemplateScalarFieldEnumSchema'
import { OrderFormTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OrderFormTemplateScalarWhereWithAggregatesInputSchema'

export const OrderFormTemplateGroupByArgsSchema: z.ZodType<Prisma.OrderFormTemplateGroupByArgs> = z.object({
  where: OrderFormTemplateWhereInputSchema.optional(), 
  orderBy: z.union([ OrderFormTemplateOrderByWithAggregationInputSchema.array(), OrderFormTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: OrderFormTemplateScalarFieldEnumSchema.array(), 
  having: OrderFormTemplateScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrderFormTemplateGroupByArgsSchema;
