import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateManyTemplateInputSchema } from './TestCatalogVersionOrderFormCreateManyTemplateInputSchema';

export const TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateManyTemplateInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateManyTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateManyTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema;
