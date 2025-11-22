import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema;
