import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';
import { OrderFormSectionUpdateWithoutOrganizationInputSchema } from './OrderFormSectionUpdateWithoutOrganizationInputSchema';
import { OrderFormSectionUncheckedUpdateWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedUpdateWithoutOrganizationInputSchema';

export const OrderFormSectionUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormSectionUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormSectionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderFormSectionUpdateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default OrderFormSectionUpdateWithWhereUniqueWithoutOrganizationInputSchema;
