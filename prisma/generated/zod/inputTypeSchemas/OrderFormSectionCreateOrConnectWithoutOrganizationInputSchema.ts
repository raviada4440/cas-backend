import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';
import { OrderFormSectionCreateWithoutOrganizationInputSchema } from './OrderFormSectionCreateWithoutOrganizationInputSchema';
import { OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema';

export const OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormSectionCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormSectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema;
