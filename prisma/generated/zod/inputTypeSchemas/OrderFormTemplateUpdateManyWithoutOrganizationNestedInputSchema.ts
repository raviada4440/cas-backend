import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateWithoutOrganizationInputSchema } from './OrderFormTemplateCreateWithoutOrganizationInputSchema';
import { OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema';
import { OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema } from './OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema';
import { OrderFormTemplateUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './OrderFormTemplateUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema } from './OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema';
import { OrderFormTemplateWhereUniqueInputSchema } from './OrderFormTemplateWhereUniqueInputSchema';
import { OrderFormTemplateUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './OrderFormTemplateUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { OrderFormTemplateUpdateManyWithWhereWithoutOrganizationInputSchema } from './OrderFormTemplateUpdateManyWithWhereWithoutOrganizationInputSchema';
import { OrderFormTemplateScalarWhereInputSchema } from './OrderFormTemplateScalarWhereInputSchema';

export const OrderFormTemplateUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.OrderFormTemplateUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormTemplateCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderFormTemplateUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderFormTemplateCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderFormTemplateWhereUniqueInputSchema), z.lazy(() => OrderFormTemplateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderFormTemplateUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderFormTemplateUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => OrderFormTemplateUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderFormTemplateScalarWhereInputSchema), z.lazy(() => OrderFormTemplateScalarWhereInputSchema).array() ]).optional(),
});

export default OrderFormTemplateUpdateManyWithoutOrganizationNestedInputSchema;
