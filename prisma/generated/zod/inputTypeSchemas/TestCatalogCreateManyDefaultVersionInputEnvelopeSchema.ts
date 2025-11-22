import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateManyDefaultVersionInputSchema } from './TestCatalogCreateManyDefaultVersionInputSchema';

export const TestCatalogCreateManyDefaultVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogCreateManyDefaultVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogCreateManyDefaultVersionInputSchema), z.lazy(() => TestCatalogCreateManyDefaultVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogCreateManyDefaultVersionInputEnvelopeSchema;
