import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingCreateWithoutLabOrderInputSchema } from './LabOrderBillingCreateWithoutLabOrderInputSchema';
import { LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderBillingUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderBillingUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderBillingCreateManyLabOrderInputEnvelopeSchema } from './LabOrderBillingCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderBillingWhereUniqueInputSchema } from './LabOrderBillingWhereUniqueInputSchema';
import { LabOrderBillingUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderBillingUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderBillingUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderBillingUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderBillingScalarWhereInputSchema } from './LabOrderBillingScalarWhereInputSchema';

export const LabOrderBillingUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderBillingUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderBillingCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderBillingUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderBillingCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderBillingWhereUniqueInputSchema), z.lazy(() => LabOrderBillingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderBillingWhereUniqueInputSchema), z.lazy(() => LabOrderBillingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderBillingWhereUniqueInputSchema), z.lazy(() => LabOrderBillingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderBillingWhereUniqueInputSchema), z.lazy(() => LabOrderBillingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderBillingUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderBillingUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderBillingScalarWhereInputSchema), z.lazy(() => LabOrderBillingScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderBillingUpdateManyWithoutLabOrderNestedInputSchema;
