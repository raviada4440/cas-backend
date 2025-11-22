import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutVersionInputSchema } from './ConsentAuditLogUpdateWithoutVersionInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutVersionInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutVersionInputSchema';

export const ConsentAuditLogUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default ConsentAuditLogUpdateWithWhereUniqueWithoutVersionInputSchema;
