import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateManyVersionInputSchema } from './TestCatalogVersionConsentCreateManyVersionInputSchema';

export const TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionConsentCreateManyVersionInputSchema), z.lazy(() => TestCatalogVersionConsentCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema;
