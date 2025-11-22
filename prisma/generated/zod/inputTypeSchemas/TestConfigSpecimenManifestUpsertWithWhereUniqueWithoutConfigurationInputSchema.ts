import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';
import { TestConfigSpecimenManifestUpdateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUpdateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedUpdateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigSpecimenManifestUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigSpecimenManifestUpsertWithWhereUniqueWithoutConfigurationInputSchema;
