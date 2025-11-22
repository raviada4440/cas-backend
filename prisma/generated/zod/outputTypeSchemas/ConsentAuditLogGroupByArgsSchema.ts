import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentAuditLogWhereInputSchema } from '../inputTypeSchemas/ConsentAuditLogWhereInputSchema'
import { ConsentAuditLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ConsentAuditLogOrderByWithAggregationInputSchema'
import { ConsentAuditLogScalarFieldEnumSchema } from '../inputTypeSchemas/ConsentAuditLogScalarFieldEnumSchema'
import { ConsentAuditLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ConsentAuditLogScalarWhereWithAggregatesInputSchema'

export const ConsentAuditLogGroupByArgsSchema: z.ZodType<Prisma.ConsentAuditLogGroupByArgs> = z.object({
  where: ConsentAuditLogWhereInputSchema.optional(), 
  orderBy: z.union([ ConsentAuditLogOrderByWithAggregationInputSchema.array(), ConsentAuditLogOrderByWithAggregationInputSchema ]).optional(),
  by: ConsentAuditLogScalarFieldEnumSchema.array(), 
  having: ConsentAuditLogScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ConsentAuditLogGroupByArgsSchema;
