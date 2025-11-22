import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabInputSchema } from './LabOrderCreateWithoutLabInputSchema';
import { LabOrderUncheckedCreateWithoutLabInputSchema } from './LabOrderUncheckedCreateWithoutLabInputSchema';
import { LabOrderCreateOrConnectWithoutLabInputSchema } from './LabOrderCreateOrConnectWithoutLabInputSchema';
import { LabOrderUpsertWithWhereUniqueWithoutLabInputSchema } from './LabOrderUpsertWithWhereUniqueWithoutLabInputSchema';
import { LabOrderCreateManyLabInputEnvelopeSchema } from './LabOrderCreateManyLabInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithWhereUniqueWithoutLabInputSchema } from './LabOrderUpdateWithWhereUniqueWithoutLabInputSchema';
import { LabOrderUpdateManyWithWhereWithoutLabInputSchema } from './LabOrderUpdateManyWithWhereWithoutLabInputSchema';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';

export const LabOrderUpdateManyWithoutLabNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithoutLabNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabInputSchema), z.lazy(() => LabOrderCreateWithoutLabInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutLabInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutLabInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutLabInputSchema), z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyLabInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutLabInputSchema), z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderUpdateManyWithWhereWithoutLabInputSchema), z.lazy(() => LabOrderUpdateManyWithWhereWithoutLabInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderUpdateManyWithoutLabNestedInputSchema;
