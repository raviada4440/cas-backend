import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutTestInputSchema } from './ConsentAuditLogUpdateWithoutTestInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutTestInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutTestInputSchema';

export const ConsentAuditLogUpdateWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutTestInputSchema) ]),
});

export default ConsentAuditLogUpdateWithWhereUniqueWithoutTestInputSchema;
