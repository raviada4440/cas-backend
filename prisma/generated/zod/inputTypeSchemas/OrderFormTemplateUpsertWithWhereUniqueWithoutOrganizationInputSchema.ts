import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateWithoutOrganizationInputSchema } from './OrderFormTemplateUpdateWithoutOrganizationInputSchema';
import { OrderFormTemplateUncheckedUpdateWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedUpdateWithoutOrganizationInputSchema';
import { OrderFormTemplateCreateWithoutOrganizationInputSchema } from './OrderFormTemplateCreateWithoutOrganizationInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema';

export const OrderFormTemplateUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormTemplateUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormTemplateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrderFormTemplateUpsertWithWhereUniqueWithoutOrganizationInputSchema;
