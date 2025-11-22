import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateManyTestInputSchema } from './ConsentAuditLogCreateManyTestInputSchema';

export const ConsentAuditLogCreateManyTestInputEnvelopeSchema: z.ZodType<Prisma.ConsentAuditLogCreateManyTestInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ConsentAuditLogCreateManyTestInputSchema), z.lazy(() => ConsentAuditLogCreateManyTestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ConsentAuditLogCreateManyTestInputEnvelopeSchema;
