import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincCreateManyLoincInputSchema } from './TestConfigOrderLoincCreateManyLoincInputSchema';

export const TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateManyLoincInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestConfigOrderLoincCreateManyLoincInputSchema), z.lazy(() => TestConfigOrderLoincCreateManyLoincInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema;
