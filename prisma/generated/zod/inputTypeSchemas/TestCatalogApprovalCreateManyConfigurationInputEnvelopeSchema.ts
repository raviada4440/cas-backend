import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalCreateManyConfigurationInputSchema } from './TestCatalogApprovalCreateManyConfigurationInputSchema';

export const TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogApprovalCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogApprovalCreateManyConfigurationInputSchema), z.lazy(() => TestCatalogApprovalCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema;
