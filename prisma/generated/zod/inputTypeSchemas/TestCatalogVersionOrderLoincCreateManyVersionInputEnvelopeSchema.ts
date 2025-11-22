import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincCreateManyVersionInputSchema } from './TestCatalogVersionOrderLoincCreateManyVersionInputSchema';

export const TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateManyVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema;
