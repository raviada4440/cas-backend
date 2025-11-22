import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateManyConsentTemplateInputSchema } from './TestCatalogVersionConsentCreateManyConsentTemplateInputSchema';

export const TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionConsentCreateManyConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentCreateManyConsentTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema;
