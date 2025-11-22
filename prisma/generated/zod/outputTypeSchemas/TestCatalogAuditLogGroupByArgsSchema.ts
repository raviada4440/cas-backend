import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogWhereInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogWhereInputSchema'
import { TestCatalogAuditLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogOrderByWithAggregationInputSchema'
import { TestCatalogAuditLogScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogAuditLogScalarFieldEnumSchema'
import { TestCatalogAuditLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogScalarWhereWithAggregatesInputSchema'

export const TestCatalogAuditLogGroupByArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogGroupByArgs> = z.object({
  where: TestCatalogAuditLogWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogAuditLogOrderByWithAggregationInputSchema.array(), TestCatalogAuditLogOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogAuditLogScalarFieldEnumSchema.array(), 
  having: TestCatalogAuditLogScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogAuditLogGroupByArgsSchema;
