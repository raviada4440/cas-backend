import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincCreateManyConfigurationInputSchema } from './TestConfigResultLoincCreateManyConfigurationInputSchema';

export const TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestConfigResultLoincCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigResultLoincCreateManyConfigurationInputSchema), z.lazy(() => TestConfigResultLoincCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema;
