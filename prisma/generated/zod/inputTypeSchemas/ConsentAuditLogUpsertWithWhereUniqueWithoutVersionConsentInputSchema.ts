import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutVersionConsentInputSchema } from './ConsentAuditLogUpdateWithoutVersionConsentInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutVersionConsentInputSchema';
import { ConsentAuditLogCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateWithoutVersionConsentInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema';

export const ConsentAuditLogUpsertWithWhereUniqueWithoutVersionConsentInputSchema: z.ZodType<Prisma.ConsentAuditLogUpsertWithWhereUniqueWithoutVersionConsentInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutVersionConsentInputSchema) ]),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema) ]),
});

export default ConsentAuditLogUpsertWithWhereUniqueWithoutVersionConsentInputSchema;
