import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateCreateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema } from './OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUpsertWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUpsertWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateToOneWithWhereWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUpdateToOneWithWhereWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema';

export const OrderFormTemplateUpdateOneWithoutLabOrderFormsNestedInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateOneWithoutLabOrderFormsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutLabOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderFormTemplateCreateOrConnectWithoutLabOrderFormsInputSchema).optional(),
  upsert: z.lazy(() => OrderFormTemplateUpsertWithoutLabOrderFormsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrderFormTemplateWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrderFormTemplateWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateToOneWithWhereWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUpdateWithoutLabOrderFormsInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutLabOrderFormsInputSchema) ]).optional(),
});

export default OrderFormTemplateUpdateOneWithoutLabOrderFormsNestedInputSchema;
