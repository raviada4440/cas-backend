import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestUpdateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUpdateWithoutVersionSpecimenInputSchema';
import { TestConfigSpecimenManifestUncheckedUpdateWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedUpdateWithoutVersionSpecimenInputSchema';

export const TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutVersionSpecimenInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutVersionSpecimenInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateWithoutVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedUpdateWithoutVersionSpecimenInputSchema) ]),
});

export default TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutVersionSpecimenInputSchema;
