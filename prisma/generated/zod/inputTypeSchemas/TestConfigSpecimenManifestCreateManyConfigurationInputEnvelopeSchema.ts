import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestCreateManyConfigurationInputSchema } from './TestConfigSpecimenManifestCreateManyConfigurationInputSchema';

export const TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestConfigSpecimenManifestCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateManyConfigurationInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigSpecimenManifestCreateManyConfigurationInputEnvelopeSchema;
