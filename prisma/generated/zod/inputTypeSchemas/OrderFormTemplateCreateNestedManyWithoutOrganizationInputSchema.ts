import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutOrganizationInputSchema } from './OrderFormTemplateCreateWithoutOrganizationInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema } from './OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema';
import { OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema } from './OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';

export const OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
});

export default OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema;
