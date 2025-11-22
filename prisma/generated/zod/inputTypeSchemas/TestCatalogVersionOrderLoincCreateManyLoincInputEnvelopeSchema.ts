import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincCreateManyLoincInputSchema } from './TestCatalogVersionOrderLoincCreateManyLoincInputSchema';

export const TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateManyLoincInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateManyLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateManyLoincInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema;
