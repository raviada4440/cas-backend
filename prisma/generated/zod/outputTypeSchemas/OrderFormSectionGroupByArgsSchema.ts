import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionWhereInputSchema } from '../inputTypeSchemas/OrderFormSectionWhereInputSchema'
import { OrderFormSectionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OrderFormSectionOrderByWithAggregationInputSchema'
import { OrderFormSectionScalarFieldEnumSchema } from '../inputTypeSchemas/OrderFormSectionScalarFieldEnumSchema'
import { OrderFormSectionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OrderFormSectionScalarWhereWithAggregatesInputSchema'

export const OrderFormSectionGroupByArgsSchema: z.ZodType<Prisma.OrderFormSectionGroupByArgs> = z.object({
  where: OrderFormSectionWhereInputSchema.optional(), 
  orderBy: z.union([ OrderFormSectionOrderByWithAggregationInputSchema.array(), OrderFormSectionOrderByWithAggregationInputSchema ]).optional(),
  by: OrderFormSectionScalarFieldEnumSchema.array(), 
  having: OrderFormSectionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrderFormSectionGroupByArgsSchema;
