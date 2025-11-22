import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestCreateManyVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateManyVersionSpecimenInputSchema';

export const TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema: z.ZodType<Prisma.TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigSpecimenManifestCreateManyVersionSpecimenInputSchema), z.lazy(() => TestConfigSpecimenManifestCreateManyVersionSpecimenInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigSpecimenManifestCreateManyVersionSpecimenInputEnvelopeSchema;
