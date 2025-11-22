import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema } from './TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';

export const TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutVersionSpecimenInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutVersionSpecimenInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema).array(), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutVersionSpecimenInputSchema;
