import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdCreateWithoutLabOrderInputSchema } from './LabOrderIcdCreateWithoutLabOrderInputSchema';
import { LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderIcdUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderIcdUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderIcdCreateManyLabOrderInputEnvelopeSchema } from './LabOrderIcdCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderIcdUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderIcdUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderIcdUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderIcdScalarWhereInputSchema } from './LabOrderIcdScalarWhereInputSchema';

export const LabOrderIcdUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderIcdUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderIcdUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderIcdCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderIcdUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderIcdUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderIcdScalarWhereInputSchema), z.lazy(() => LabOrderIcdScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderIcdUpdateManyWithoutLabOrderNestedInputSchema;
