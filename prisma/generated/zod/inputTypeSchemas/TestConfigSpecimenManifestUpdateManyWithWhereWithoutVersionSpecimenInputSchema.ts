import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestScalarWhereInputSchema } from './TestConfigSpecimenManifestScalarWhereInputSchema';
import { TestConfigSpecimenManifestUpdateManyMutationInputSchema } from './TestConfigSpecimenManifestUpdateManyMutationInputSchema';
import { TestConfigSpecimenManifestUncheckedUpdateManyWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedUpdateManyWithoutVersionSpecimenInputSchema';

export const TestConfigSpecimenManifestUpdateManyWithWhereWithoutVersionSpecimenInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpdateManyWithWhereWithoutVersionSpecimenInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateManyMutationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedUpdateManyWithoutVersionSpecimenInputSchema) ]),
});

export default TestConfigSpecimenManifestUpdateManyWithWhereWithoutVersionSpecimenInputSchema;
