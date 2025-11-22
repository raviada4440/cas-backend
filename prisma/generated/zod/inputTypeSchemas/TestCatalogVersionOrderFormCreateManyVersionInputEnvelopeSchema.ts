import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateManyVersionInputSchema } from './TestCatalogVersionOrderFormCreateManyVersionInputSchema';

export const TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateManyVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema;
