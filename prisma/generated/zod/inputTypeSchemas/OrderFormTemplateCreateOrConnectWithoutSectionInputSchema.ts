import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateCreateWithoutSectionInputSchema } from './OrderFormTemplateCreateWithoutSectionInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutSectionInputSchema } from './OrderFormTemplateUncheckedCreateWithoutSectionInputSchema';

export const OrderFormTemplateCreateOrConnectWithoutSectionInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateOrConnectWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutSectionInputSchema) ]),
});

export default OrderFormTemplateCreateOrConnectWithoutSectionInputSchema;
