import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateCreateWithoutOrganizationInputSchema } from './OrderFormTemplateCreateWithoutOrganizationInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema';

export const OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema;
