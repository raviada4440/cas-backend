import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincCreateManyVersionInputSchema } from './TestCatalogVersionResultLoincCreateManyVersionInputSchema';

export const TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateManyVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema;
