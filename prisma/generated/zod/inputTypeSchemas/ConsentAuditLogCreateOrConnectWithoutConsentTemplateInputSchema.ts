import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogCreateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema';

export const ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema: z.ZodType<Prisma.ConsentAuditLogCreateOrConnectWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema) ]),
});

export default ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema;
