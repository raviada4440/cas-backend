import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateManyVersionInputSchema } from './TestCatalogVersionBiomarkerCreateManyVersionInputSchema';

export const TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateManyVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema;
