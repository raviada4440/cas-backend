import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutSectionInputSchema } from './OrderFormTemplateCreateWithoutSectionInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutSectionInputSchema } from './OrderFormTemplateUncheckedCreateWithoutSectionInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutSectionInputSchema } from './OrderFormTemplateCreateOrConnectWithoutSectionInputSchema';
import { OrderFormTemplateCreateManySectionInputEnvelopeSchema } from './OrderFormTemplateCreateManySectionInputEnvelopeSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';

export const OrderFormTemplateUncheckedCreateNestedManyWithoutSectionInputSchema: z.ZodType<Prisma.OrderFormTemplateUncheckedCreateNestedManyWithoutSectionInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateCreateWithoutSectionInputSchema).array(), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutSectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderFormTemplateCreateOrConnectWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateCreateOrConnectWithoutSectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderFormTemplateCreateManySectionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
});

export default OrderFormTemplateUncheckedCreateNestedManyWithoutSectionInputSchema;
