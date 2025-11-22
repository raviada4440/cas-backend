import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutSectionInputSchema } from './OrderFormTemplateCreateWithoutSectionInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutSectionInputSchema } from './OrderFormTemplateUncheckedCreateWithoutSectionInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutSectionInputSchema } from './OrderFormTemplateCreateOrConnectWithoutSectionInputSchema';
import { OrderFormTemplateUpsertWithWhereUniqueWithoutSectionInputSchema } from './OrderFormTemplateUpsertWithWhereUniqueWithoutSectionInputSchema';
import { OrderFormTemplateCreateManySectionInputEnvelopeSchema } from './OrderFormTemplateCreateManySectionInputEnvelopeSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateWithWhereUniqueWithoutSectionInputSchema } from './OrderFormTemplateUpdateWithWhereUniqueWithoutSectionInputSchema';
import { OrderFormTemplateUpdateManyWithWhereWithoutSectionInputSchema } from './OrderFormTemplateUpdateManyWithWhereWithoutSectionInputSchema';
import { OrderFormTemplateScalarWhereInputSchema } from './OrderFormTemplateScalarWhereInputSchema';

export const OrderFormTemplateUncheckedUpdateManyWithoutSectionNestedInputSchema: z.ZodType<Prisma.OrderFormTemplateUncheckedUpdateManyWithoutSectionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateCreateWithoutSectionInputSchema).array(), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutSectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderFormTemplateCreateOrConnectWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateCreateOrConnectWithoutSectionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderFormTemplateUpsertWithWhereUniqueWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUpsertWithWhereUniqueWithoutSectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderFormTemplateCreateManySectionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateWithWhereUniqueWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUpdateWithWhereUniqueWithoutSectionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderFormTemplateUpdateManyWithWhereWithoutSectionInputSchema), z.lazy(() => OrderFormTemplateUpdateManyWithWhereWithoutSectionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderFormTemplateScalarWhereInputSchema), z.lazy(() => OrderFormTemplateScalarWhereInputSchema).array() ]).optional(),
});

export default OrderFormTemplateUncheckedUpdateManyWithoutSectionNestedInputSchema;
