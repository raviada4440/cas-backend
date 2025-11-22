import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincCreateManyLoincInputSchema } from './TestCatalogVersionResultLoincCreateManyLoincInputSchema';

export const TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateManyLoincInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateManyLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateManyLoincInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema;
