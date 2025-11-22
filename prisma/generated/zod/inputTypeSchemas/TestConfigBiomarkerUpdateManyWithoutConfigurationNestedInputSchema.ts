import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerCreateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigBiomarkerUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema } from './TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigBiomarkerUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestConfigBiomarkerUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestConfigBiomarkerScalarWhereInputSchema } from './TestConfigBiomarkerScalarWhereInputSchema';

export const TestConfigBiomarkerUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigBiomarkerUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigBiomarkerUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigBiomarkerUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema), z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigBiomarkerUpdateManyWithoutConfigurationNestedInputSchema;
