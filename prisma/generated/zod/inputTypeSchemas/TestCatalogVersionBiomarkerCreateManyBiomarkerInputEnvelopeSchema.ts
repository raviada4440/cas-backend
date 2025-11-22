import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateManyBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateManyBiomarkerInputSchema';

export const TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateManyBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateManyBiomarkerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema;
