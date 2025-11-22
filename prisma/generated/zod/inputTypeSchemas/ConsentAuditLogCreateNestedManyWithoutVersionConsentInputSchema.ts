import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateWithoutVersionConsentInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema';
import { ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema } from './ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';

export const ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema: z.ZodType<Prisma.ConsentAuditLogCreateNestedManyWithoutVersionConsentInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutVersionConsentInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
});

export default ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema;
