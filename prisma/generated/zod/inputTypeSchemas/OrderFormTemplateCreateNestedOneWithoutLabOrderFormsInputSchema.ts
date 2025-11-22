import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateCreateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema } from './OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';

export const OrderFormTemplateCreateNestedOneWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateNestedOneWithoutLabOrderFormsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema).optional(),
  connect: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).optional(),
});

export default OrderFormTemplateCreateNestedOneWithoutLabOrderFormsInputSchema;
