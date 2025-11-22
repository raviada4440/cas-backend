import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutTestInputSchema } from './ConsentAuditLogUpdateWithoutTestInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutTestInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutTestInputSchema';
import { ConsentAuditLogCreateWithoutTestInputSchema } from './ConsentAuditLogCreateWithoutTestInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutTestInputSchema } from './ConsentAuditLogUncheckedCreateWithoutTestInputSchema';

export const ConsentAuditLogUpsertWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.ConsentAuditLogUpsertWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutTestInputSchema) ]),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutTestInputSchema) ]),
});

export default ConsentAuditLogUpsertWithWhereUniqueWithoutTestInputSchema;
