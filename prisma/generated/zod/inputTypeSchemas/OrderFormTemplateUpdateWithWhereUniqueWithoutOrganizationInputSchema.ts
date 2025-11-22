import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateWithoutOrganizationInputSchema } from './OrderFormTemplateUpdateWithoutOrganizationInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutOrganizationInputSchema';

export const OrderFormTemplateUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default OrderFormTemplateUpdateWithWhereUniqueWithoutOrganizationInputSchema;
