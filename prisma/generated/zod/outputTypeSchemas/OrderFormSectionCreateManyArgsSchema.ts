import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionCreateManyInputSchema } from '../inputTypeSchemas/OrderFormSectionCreateManyInputSchema'

export const OrderFormSectionCreateManyArgsSchema: z.ZodType<Prisma.OrderFormSectionCreateManyArgs> = z.object({
  data: z.union([ OrderFormSectionCreateManyInputSchema, OrderFormSectionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OrderFormSectionCreateManyArgsSchema;
