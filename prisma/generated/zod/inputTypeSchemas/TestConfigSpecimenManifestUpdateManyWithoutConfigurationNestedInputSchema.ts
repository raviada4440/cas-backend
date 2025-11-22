import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema } from './TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestScalarWhereInputSchema } from './TestConfigSpecimenManifestScalarWhereInputSchema';

export const TestConfigSpecimenManifestUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigSpecimenManifestScalarWhereInputSchema), z.lazy(() => TestConfigSpecimenManifestScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigSpecimenManifestUpdateManyWithoutConfigurationNestedInputSchema;
