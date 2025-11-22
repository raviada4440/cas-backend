import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogCreateManyTestInputSchema } from './TestCatalogAuditLogCreateManyTestInputSchema';

export const TestCatalogAuditLogCreateManyTestInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogAuditLogCreateManyTestInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TestCatalogAuditLogCreateManyTestInputSchema), z.lazy(() => TestCatalogAuditLogCreateManyTestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TestCatalogAuditLogCreateManyTestInputEnvelopeSchema;
