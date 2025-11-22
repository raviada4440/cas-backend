import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateCreateManyInputSchema } from '../inputTypeSchemas/OrderFormTemplateCreateManyInputSchema'

export const OrderFormTemplateCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderFormTemplateCreateManyAndReturnArgs> = z.object({
  data: z.union([ OrderFormTemplateCreateManyInputSchema, OrderFormTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OrderFormTemplateCreateManyAndReturnArgsSchema;
