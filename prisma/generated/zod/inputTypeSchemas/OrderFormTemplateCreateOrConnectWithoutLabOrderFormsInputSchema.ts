import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateCreateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema';

export const OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema) ]),
});

export default OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema;
