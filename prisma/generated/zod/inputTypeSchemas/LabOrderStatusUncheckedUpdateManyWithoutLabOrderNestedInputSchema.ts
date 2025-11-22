import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusCreateWithoutLabOrderInputSchema } from './LabOrderStatusCreateWithoutLabOrderInputSchema';
import { LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderStatusUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderStatusUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderStatusCreateManyLabOrderInputEnvelopeSchema } from './LabOrderStatusCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderStatusWhereUniqueInputSchema } from './LabOrderStatusWhereUniqueInputSchema';
import { LabOrderStatusUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderStatusUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderStatusUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderStatusUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderStatusScalarWhereInputSchema } from './LabOrderStatusScalarWhereInputSchema';

export const LabOrderStatusUncheckedUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderStatusUncheckedUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderStatusCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderStatusUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderStatusCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderStatusWhereUniqueInputSchema), z.lazy(() => LabOrderStatusWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderStatusWhereUniqueInputSchema), z.lazy(() => LabOrderStatusWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderStatusWhereUniqueInputSchema), z.lazy(() => LabOrderStatusWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderStatusWhereUniqueInputSchema), z.lazy(() => LabOrderStatusWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderStatusUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderStatusUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderStatusScalarWhereInputSchema), z.lazy(() => LabOrderStatusScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderStatusUncheckedUpdateManyWithoutLabOrderNestedInputSchema;
