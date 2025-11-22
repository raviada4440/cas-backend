import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionCreateManyInputSchema } from '../inputTypeSchemas/OrderFormSectionCreateManyInputSchema'

export const OrderFormSectionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderFormSectionCreateManyAndReturnArgs> = z.object({
  data: z.union([ OrderFormSectionCreateManyInputSchema, OrderFormSectionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OrderFormSectionCreateManyAndReturnArgsSchema;
