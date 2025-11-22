import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateManyLabInputSchema } from './TestCatalogCreateManyLabInputSchema';

export const TestCatalogCreateManyLabInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogCreateManyLabInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogCreateManyLabInputSchema), z.lazy(() => TestCatalogCreateManyLabInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogCreateManyLabInputEnvelopeSchema;
