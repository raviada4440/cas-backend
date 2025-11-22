import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutVersionInputSchema } from './ConsentAuditLogUpdateWithoutVersionInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutVersionInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutVersionInputSchema';
import { ConsentAuditLogCreateWithoutVersionInputSchema } from './ConsentAuditLogCreateWithoutVersionInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionInputSchema';

export const ConsentAuditLogUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.ConsentAuditLogUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionInputSchema) ]),
});

export default ConsentAuditLogUpsertWithWhereUniqueWithoutVersionInputSchema;
