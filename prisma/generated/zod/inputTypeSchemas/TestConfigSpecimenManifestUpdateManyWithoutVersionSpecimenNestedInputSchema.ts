import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema } from './TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUpdateManyWithWhereWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUpdateManyWithWhereWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestScalarWhereInputSchema } from './TestConfigSpecimenManifestScalarWhereInputSchema';

export const TestConfigSpecimenManifestUpdateManyWithoutVersionSpecimenNestedInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpdateManyWithoutVersionSpecimenNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema).array(), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutVersionSpecimenInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutVersionSpecimenInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateManyWithWhereWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUpdateManyWithWhereWithoutVersionSpecimenInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigSpecimenManifestScalarWhereInputSchema), z.lazy(() => TestConfigSpecimenManifestScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigSpecimenManifestUpdateManyWithoutVersionSpecimenNestedInputSchema;
