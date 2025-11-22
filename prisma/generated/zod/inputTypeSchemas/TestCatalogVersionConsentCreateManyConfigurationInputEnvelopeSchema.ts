import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateManyConfigurationInputSchema } from './TestCatalogVersionConsentCreateManyConfigurationInputSchema';

export const TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionConsentCreateManyConfigurationInputSchema), z.lazy(() => TestCatalogVersionConsentCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionConsentCreateManyConfigurationInputEnvelopeSchema;
