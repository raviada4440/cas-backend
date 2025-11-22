import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateManyTestInputSchema } from './TestCatalogVersionCreateManyTestInputSchema';

export const TestCatalogVersionCreateManyTestInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionCreateManyTestInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionCreateManyTestInputSchema), z.lazy(() => TestCatalogVersionCreateManyTestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionCreateManyTestInputEnvelopeSchema;
