import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateManyVersionInputSchema } from './ConsentAuditLogCreateManyVersionInputSchema';

export const ConsentAuditLogCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.ConsentAuditLogCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ConsentAuditLogCreateManyVersionInputSchema), z.lazy(() => ConsentAuditLogCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ConsentAuditLogCreateManyVersionInputEnvelopeSchema;
