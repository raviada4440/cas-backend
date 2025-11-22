import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentAuditLogWhereInputSchema } from '../inputTypeSchemas/ConsentAuditLogWhereInputSchema'

export const ConsentAuditLogDeleteManyArgsSchema: z.ZodType<Prisma.ConsentAuditLogDeleteManyArgs> = z.object({
  where: ConsentAuditLogWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ConsentAuditLogDeleteManyArgsSchema;
