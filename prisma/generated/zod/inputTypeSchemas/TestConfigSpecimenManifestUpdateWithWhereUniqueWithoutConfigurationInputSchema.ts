import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestUpdateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUpdateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedUpdateWithoutConfigurationInputSchema';

export const TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestConfigSpecimenManifestUpdateWithWhereUniqueWithoutConfigurationInputSchema;
