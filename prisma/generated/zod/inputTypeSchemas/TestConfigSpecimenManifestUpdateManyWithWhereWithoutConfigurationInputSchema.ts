import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestScalarWhereInputSchema } from './TestConfigSpecimenManifestScalarWhereInputSchema';
import { TestConfigSpecimenManifestUpdateManyMutationInputSchema } from './TestConfigSpecimenManifestUpdateManyMutationInputSchema';
import { TestConfigSpecimenManifestUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestConfigSpecimenManifestUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateManyMutationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestConfigSpecimenManifestUpdateManyWithWhereWithoutConfigurationInputSchema;
