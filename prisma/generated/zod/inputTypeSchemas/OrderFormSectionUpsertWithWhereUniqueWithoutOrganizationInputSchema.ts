import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';
import { OrderFormSectionUpdateWithoutOrganizationInputSchema } from './OrderFormSectionUpdateWithoutOrganizationInputSchema';
import { OrderFormSectionUncheckedUpdateWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedUpdateWithoutOrganizationInputSchema';
import { OrderFormSectionCreateWithoutOrganizationInputSchema } from './OrderFormSectionCreateWithoutOrganizationInputSchema';
import { OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema';

export const OrderFormSectionUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormSectionUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrderFormSectionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderFormSectionUpdateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrderFormSectionUpsertWithWhereUniqueWithoutOrganizationInputSchema;
