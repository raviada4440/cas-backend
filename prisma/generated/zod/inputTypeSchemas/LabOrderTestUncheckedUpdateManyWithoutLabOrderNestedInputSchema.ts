import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestCreateWithoutLabOrderInputSchema } from './LabOrderTestCreateWithoutLabOrderInputSchema';
import { LabOrderTestUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderTestUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderTestCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderTestCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderTestUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderTestUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderTestCreateManyLabOrderInputEnvelopeSchema } from './LabOrderTestCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderTestUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderTestUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderTestUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderTestScalarWhereInputSchema } from './LabOrderTestScalarWhereInputSchema';

export const LabOrderTestUncheckedUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderTestUncheckedUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderTestUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderTestCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderTestUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderTestCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderTestUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderTestUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderTestUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderTestScalarWhereInputSchema), z.lazy(() => LabOrderTestScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderTestUncheckedUpdateManyWithoutLabOrderNestedInputSchema;
