import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincCreateManyLoincInputSchema } from './TestConfigResultLoincCreateManyLoincInputSchema';

export const TestConfigResultLoincCreateManyLoincInputEnvelopeSchema: z.ZodType<Prisma.TestConfigResultLoincCreateManyLoincInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigResultLoincCreateManyLoincInputSchema), z.lazy(() => TestConfigResultLoincCreateManyLoincInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigResultLoincCreateManyLoincInputEnvelopeSchema;
