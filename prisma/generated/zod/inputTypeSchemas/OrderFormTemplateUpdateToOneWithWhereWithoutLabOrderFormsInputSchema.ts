import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';
import { OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema';

export const OrderFormTemplateUpdateToOneWithWhereWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateToOneWithWhereWithoutLabOrderFormsInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema) ]),
});

export default OrderFormTemplateUpdateToOneWithWhereWithoutLabOrderFormsInputSchema;
