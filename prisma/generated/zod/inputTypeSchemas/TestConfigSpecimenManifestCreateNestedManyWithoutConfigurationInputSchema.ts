import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema } from './TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from './TestConfigSpecimenManifestWhereUniqueInputSchema';

export const TestConfigSpecimenManifestCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigSpecimenManifestCreateNestedManyWithoutConfigurationInputSchema;
