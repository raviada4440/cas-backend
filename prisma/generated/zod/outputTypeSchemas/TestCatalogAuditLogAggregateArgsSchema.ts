import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogWhereInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogWhereInputSchema'
import { TestCatalogAuditLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogOrderByWithRelationInputSchema'
import { TestCatalogAuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogWhereUniqueInputSchema'

export const TestCatalogAuditLogAggregateArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogAggregateArgs> = z.object({
  where: TestCatalogAuditLogWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogAuditLogOrderByWithRelationInputSchema.array(), TestCatalogAuditLogOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogAuditLogWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogAuditLogAggregateArgsSchema;
