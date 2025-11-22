import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionCreateWithoutOrganizationInputSchema } from './OrderFormSectionCreateWithoutOrganizationInputSchema';
import { OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema';
import { OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema } from './OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema';
import { OrderFormSectionUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './OrderFormSectionUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { OrderFormSectionCreateManyOrganizationInputEnvelopeSchema } from './OrderFormSectionCreateManyOrganizationInputEnvelopeSchema';
import { OrderFormSectionWhereUniqueInputSchema } from './OrderFormSectionWhereUniqueInputSchema';
import { OrderFormSectionUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './OrderFormSectionUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { OrderFormSectionUpdateManyWithWhereWithoutOrganizationInputSchema } from './OrderFormSectionUpdateManyWithWhereWithoutOrganizationInputSchema';
import { OrderFormSectionScalarWhereInputSchema } from './OrderFormSectionScalarWhereInputSchema';

export const OrderFormSectionUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.OrderFormSectionUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrderFormSectionCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderFormSectionUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderFormSectionCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderFormSectionWhereUniqueInputSchema), z.lazy(() => OrderFormSectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderFormSectionWhereUniqueInputSchema), z.lazy(() => OrderFormSectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderFormSectionWhereUniqueInputSchema), z.lazy(() => OrderFormSectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderFormSectionWhereUniqueInputSchema), z.lazy(() => OrderFormSectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderFormSectionUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderFormSectionUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => OrderFormSectionUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderFormSectionScalarWhereInputSchema), z.lazy(() => OrderFormSectionScalarWhereInputSchema).array() ]).optional(),
});

export default OrderFormSectionUpdateManyWithoutOrganizationNestedInputSchema;
