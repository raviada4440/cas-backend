import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogCreateWithoutTestInputSchema } from './ConsentAuditLogCreateWithoutTestInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutTestInputSchema } from './ConsentAuditLogUncheckedCreateWithoutTestInputSchema';

export const ConsentAuditLogCreateOrConnectWithoutTestInputSchema: z.ZodType<Prisma.ConsentAuditLogCreateOrConnectWithoutTestInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutTestInputSchema) ]),
});

export default ConsentAuditLogCreateOrConnectWithoutTestInputSchema;
