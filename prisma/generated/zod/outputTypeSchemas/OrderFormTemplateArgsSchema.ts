import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFormTemplateSelectSchema } from '../inputTypeSchemas/OrderFormTemplateSelectSchema';
import { OrderFormTemplateIncludeSchema } from '../inputTypeSchemas/OrderFormTemplateIncludeSchema';

export const OrderFormTemplateArgsSchema: z.ZodType<Prisma.OrderFormTemplateDefaultArgs> = z.object({
  select: z.lazy(() => OrderFormTemplateSelectSchema).optional(),
  include: z.lazy(() => OrderFormTemplateIncludeSchema).optional(),
}).strict();

export default OrderFormTemplateArgsSchema;
