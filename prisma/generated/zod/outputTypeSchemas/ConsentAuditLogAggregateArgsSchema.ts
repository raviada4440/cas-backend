import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentAuditLogWhereInputSchema } from '../inputTypeSchemas/ConsentAuditLogWhereInputSchema'
import { ConsentAuditLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConsentAuditLogOrderByWithRelationInputSchema'
import { ConsentAuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/ConsentAuditLogWhereUniqueInputSchema'

export const ConsentAuditLogAggregateArgsSchema: z.ZodType<Prisma.ConsentAuditLogAggregateArgs> = z.object({
  where: ConsentAuditLogWhereInputSchema.optional(), 
  orderBy: z.union([ ConsentAuditLogOrderByWithRelationInputSchema.array(), ConsentAuditLogOrderByWithRelationInputSchema ]).optional(),
  cursor: ConsentAuditLogWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ConsentAuditLogAggregateArgsSchema;
