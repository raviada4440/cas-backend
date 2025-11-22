import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateManyConsentTemplateInputSchema } from './ConsentAuditLogCreateManyConsentTemplateInputSchema';

export const ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema: z.ZodType<Prisma.ConsentAuditLogCreateManyConsentTemplateInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ConsentAuditLogCreateManyConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogCreateManyConsentTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema;
