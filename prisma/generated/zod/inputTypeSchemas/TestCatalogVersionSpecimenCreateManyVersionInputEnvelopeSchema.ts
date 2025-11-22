import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenCreateManyVersionInputSchema } from './TestCatalogVersionSpecimenCreateManyVersionInputSchema';

export const TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateManyVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema;
