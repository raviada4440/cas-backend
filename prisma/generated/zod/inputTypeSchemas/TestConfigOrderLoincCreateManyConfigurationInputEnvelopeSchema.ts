import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincCreateManyConfigurationInputSchema } from './TestConfigOrderLoincCreateManyConfigurationInputSchema';

export const TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigOrderLoincCreateManyConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema;
