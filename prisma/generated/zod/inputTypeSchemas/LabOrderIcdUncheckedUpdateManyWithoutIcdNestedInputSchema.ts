import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdCreateWithoutIcdInputSchema } from './LabOrderIcdCreateWithoutIcdInputSchema';
import { LabOrderIcdUncheckedCreateWithoutIcdInputSchema } from './LabOrderIcdUncheckedCreateWithoutIcdInputSchema';
import { LabOrderIcdCreateOrConnectWithoutIcdInputSchema } from './LabOrderIcdCreateOrConnectWithoutIcdInputSchema';
import { LabOrderIcdUpsertWithWhereUniqueWithoutIcdInputSchema } from './LabOrderIcdUpsertWithWhereUniqueWithoutIcdInputSchema';
import { LabOrderIcdCreateManyIcdInputEnvelopeSchema } from './LabOrderIcdCreateManyIcdInputEnvelopeSchema';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdUpdateWithWhereUniqueWithoutIcdInputSchema } from './LabOrderIcdUpdateWithWhereUniqueWithoutIcdInputSchema';
import { LabOrderIcdUpdateManyWithWhereWithoutIcdInputSchema } from './LabOrderIcdUpdateManyWithWhereWithoutIcdInputSchema';
import { LabOrderIcdScalarWhereInputSchema } from './LabOrderIcdScalarWhereInputSchema';

export const LabOrderIcdUncheckedUpdateManyWithoutIcdNestedInputSchema: z.ZodType<Prisma.LabOrderIcdUncheckedUpdateManyWithoutIcdNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdCreateWithoutIcdInputSchema).array(), z.lazy(() => LabOrderIcdUncheckedCreateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutIcdInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderIcdCreateOrConnectWithoutIcdInputSchema), z.lazy(() => LabOrderIcdCreateOrConnectWithoutIcdInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderIcdUpsertWithWhereUniqueWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUpsertWithWhereUniqueWithoutIcdInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderIcdCreateManyIcdInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderIcdUpdateWithWhereUniqueWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUpdateWithWhereUniqueWithoutIcdInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderIcdUpdateManyWithWhereWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUpdateManyWithWhereWithoutIcdInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderIcdScalarWhereInputSchema), z.lazy(() => LabOrderIcdScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderIcdUncheckedUpdateManyWithoutIcdNestedInputSchema;
