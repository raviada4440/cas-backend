import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeCreateManyVersionInputSchema } from './TestCatalogVersionCptCodeCreateManyVersionInputSchema';

export const TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionCptCodeCreateManyVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema;
