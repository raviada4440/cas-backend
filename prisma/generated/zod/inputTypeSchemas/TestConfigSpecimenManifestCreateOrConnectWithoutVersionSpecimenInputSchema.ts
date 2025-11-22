import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema';

export const TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema) ]),
});

export default TestConfigSpecimenManifestCreateOrConnectWithoutVersionSpecimenInputSchema;
