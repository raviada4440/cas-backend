import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeCreateManyConfigurationInputSchema } from './TestConfigCptCodeCreateManyConfigurationInputSchema';

export const TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestConfigCptCodeCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigCptCodeCreateManyConfigurationInputSchema), z.lazy(() => TestConfigCptCodeCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema;
