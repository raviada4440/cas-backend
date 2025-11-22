import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutVersionConsentInputSchema } from './ConsentAuditLogUpdateWithoutVersionConsentInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutVersionConsentInputSchema';

export const ConsentAuditLogUpdateWithWhereUniqueWithoutVersionConsentInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateWithWhereUniqueWithoutVersionConsentInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutVersionConsentInputSchema) ]),
});

export default ConsentAuditLogUpdateWithWhereUniqueWithoutVersionConsentInputSchema;
