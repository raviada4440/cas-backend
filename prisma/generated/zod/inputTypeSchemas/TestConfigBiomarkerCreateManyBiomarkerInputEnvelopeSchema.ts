import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerCreateManyBiomarkerInputSchema } from './TestConfigBiomarkerCreateManyBiomarkerInputSchema';

export const TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateManyBiomarkerInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigBiomarkerCreateManyBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerCreateManyBiomarkerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema;
