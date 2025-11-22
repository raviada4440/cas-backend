import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateWithoutVersionConsentInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema';

export const ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema: z.ZodType<Prisma.ConsentAuditLogCreateOrConnectWithoutVersionConsentInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema) ]),
});

export default ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema;
