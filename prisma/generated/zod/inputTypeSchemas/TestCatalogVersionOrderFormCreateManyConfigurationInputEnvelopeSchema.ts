import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateManyConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateManyConfigurationInputSchema';

export const TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateManyConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema;
