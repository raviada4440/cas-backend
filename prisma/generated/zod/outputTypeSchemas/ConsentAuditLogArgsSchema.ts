import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentAuditLogSelectSchema } from '../inputTypeSchemas/ConsentAuditLogSelectSchema';
import { ConsentAuditLogIncludeSchema } from '../inputTypeSchemas/ConsentAuditLogIncludeSchema';

export const ConsentAuditLogArgsSchema: z.ZodType<Prisma.ConsentAuditLogDefaultArgs> = z.object({
  select: z.lazy(() => ConsentAuditLogSelectSchema).optional(),
  include: z.lazy(() => ConsentAuditLogIncludeSchema).optional(),
}).strict();

export default ConsentAuditLogArgsSchema;
