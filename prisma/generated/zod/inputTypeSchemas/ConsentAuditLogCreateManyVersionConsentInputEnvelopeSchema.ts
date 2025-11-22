import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateManyVersionConsentInputSchema } from './ConsentAuditLogCreateManyVersionConsentInputSchema';

export const ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema: z.ZodType<Prisma.ConsentAuditLogCreateManyVersionConsentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ConsentAuditLogCreateManyVersionConsentInputSchema), z.lazy(() => ConsentAuditLogCreateManyVersionConsentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema;
