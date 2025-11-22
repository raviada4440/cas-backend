import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogCreateWithoutVersionInputSchema } from './ConsentAuditLogCreateWithoutVersionInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionInputSchema';

export const ConsentAuditLogCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.ConsentAuditLogCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionInputSchema) ]),
});

export default ConsentAuditLogCreateOrConnectWithoutVersionInputSchema;
