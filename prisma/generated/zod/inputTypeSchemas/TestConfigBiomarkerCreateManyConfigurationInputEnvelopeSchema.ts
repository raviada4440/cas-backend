import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerCreateManyConfigurationInputSchema } from './TestConfigBiomarkerCreateManyConfigurationInputSchema';

export const TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigBiomarkerCreateManyConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema;
