import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateWithoutSectionInputSchema } from './OrderFormTemplateUpdateWithoutSectionInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema';
import { OrderFormTemplateCreateWithoutSectionInputSchema } from './OrderFormTemplateCreateWithoutSectionInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutSectionInputSchema } from './OrderFormTemplateUncheckedCreateWithoutSectionInputSchema';

export const OrderFormTemplateUpsertWithWhereUniqueWithoutSectionInputSchema: z.ZodType<Prisma.OrderFormTemplateUpsertWithWhereUniqueWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema) ]),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutSectionInputSchema) ]),
});

export default OrderFormTemplateUpsertWithWhereUniqueWithoutSectionInputSchema;
