import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionCreateWithoutOrganizationInputSchema } from './OrderFormSectionCreateWithoutOrganizationInputSchema';
import { OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema';
import { OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema } from './OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema';
import { OrderFormSectionCreateManyOrganizationInputEnvelopeSchema } from './OrderFormSectionCreateManyOrganizationInputEnvelopeSchema';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';

export const OrderFormSectionUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormSectionUncheckedCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderFormSectionCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderFormSectionWhereUniqueInputSchema), z.lazy(() => OrderFormSectionWhereUniqueInputSchema).array() ]).optional(),
});

export default OrderFormSectionUncheckedCreateNestedManyWithoutOrganizationInputSchema;
