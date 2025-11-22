import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateWithoutSectionInputSchema } from './OrderFormTemplateUpdateWithoutSectionInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema';

export const OrderFormTemplateUpdateWithWhereUniqueWithoutSectionInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateWithWhereUniqueWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema) ]),
});

export default OrderFormTemplateUpdateWithWhereUniqueWithoutSectionInputSchema;
