import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateCreateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';

export const OrderFormTemplateUpsertWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.OrderFormTemplateUpsertWithoutLabOrderFormsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema) ]),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema) ]),
  where: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
});

export default OrderFormTemplateUpsertWithoutLabOrderFormsInputSchema;
