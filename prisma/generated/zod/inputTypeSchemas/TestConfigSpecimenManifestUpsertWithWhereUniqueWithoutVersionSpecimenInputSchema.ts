import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestUpdateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUpdateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUncheckedUpdateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedUpdateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema';

export const TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutVersionSpecimenInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutVersionSpecimenInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedUpdateWithoutVersionSpecimenInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutVersionSpecimenInputSchema) ]),
});

export default TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutVersionSpecimenInputSchema;
