import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentAuditLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/ConsentAuditLogUpdateManyMutationInputSchema'
import { ConsentAuditLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ConsentAuditLogUncheckedUpdateManyInputSchema'
import { ConsentAuditLogWhereInputSchema } from '../inputTypeSchemas/ConsentAuditLogWhereInputSchema'

export const ConsentAuditLogUpdateManyArgsSchema: z.ZodType<Prisma.ConsentAuditLogUpdateManyArgs> = z.object({
  data: z.union([ ConsentAuditLogUpdateManyMutationInputSchema, ConsentAuditLogUncheckedUpdateManyInputSchema ]),
  where: ConsentAuditLogWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ConsentAuditLogUpdateManyArgsSchema;
