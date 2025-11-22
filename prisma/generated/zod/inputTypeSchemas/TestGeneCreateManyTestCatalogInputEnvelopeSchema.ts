import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneCreateManyTestCatalogInputSchema } from './TestGeneCreateManyTestCatalogInputSchema';

export const TestGeneCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.TestGeneCreateManyTestCatalogInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestGeneCreateManyTestCatalogInputSchema), z.lazy(() => TestGeneCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestGeneCreateManyTestCatalogInputEnvelopeSchema;
