import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormSectionSelectSchema } from '../inputTypeSchemas/OrderFormSectionSelectSchema';
import { OrderFormSectionIncludeSchema } from '../inputTypeSchemas/OrderFormSectionIncludeSchema';

export const OrderFormSectionArgsSchema: z.ZodType<Prisma.OrderFormSectionDefaultArgs> = z.object({
  select: z.lazy(() => OrderFormSectionSelectSchema).optional(),
  include: z.lazy(() => OrderFormSectionIncludeSchema).optional(),
}).strict();

export default OrderFormSectionArgsSchema;
