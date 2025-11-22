import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema } from './TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerScalarWhereInputSchema } from './TestConfigBiomarkerScalarWhereInputSchema';

export const TestConfigBiomarkerUncheckedUpdateManyWithoutBiomarkerNestedInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUncheckedUpdateManyWithoutBiomarkerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerCreateWithoutBiomarkerInputSchema).array(), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema), z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigBiomarkerUncheckedUpdateManyWithoutBiomarkerNestedInputSchema;
