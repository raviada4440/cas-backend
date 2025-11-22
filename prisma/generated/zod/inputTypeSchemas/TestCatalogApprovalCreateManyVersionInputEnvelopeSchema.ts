import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalCreateManyVersionInputSchema } from './TestCatalogApprovalCreateManyVersionInputSchema';

export const TestCatalogApprovalCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogApprovalCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogApprovalCreateManyVersionInputSchema), z.lazy(() => TestCatalogApprovalCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogApprovalCreateManyVersionInputEnvelopeSchema;
