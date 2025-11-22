import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereInputSchema } from './ConsentAuditLogWhereInputSchema';

export const ConsentAuditLogListRelationFilterSchema: z.ZodType<Prisma.ConsentAuditLogListRelationFilter> = z.strictObject({
  every: z.lazy(() => ConsentAuditLogWhereInputSchema).optional(),
  some: z.lazy(() => ConsentAuditLogWhereInputSchema).optional(),
  none: z.lazy(() => ConsentAuditLogWhereInputSchema).optional(),
});

export default ConsentAuditLogListRelationFilterSchema;
