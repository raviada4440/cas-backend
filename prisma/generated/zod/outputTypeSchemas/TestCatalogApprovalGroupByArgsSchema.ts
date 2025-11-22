import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalWhereInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereInputSchema'
import { TestCatalogApprovalOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogApprovalOrderByWithAggregationInputSchema'
import { TestCatalogApprovalScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogApprovalScalarFieldEnumSchema'
import { TestCatalogApprovalScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogApprovalScalarWhereWithAggregatesInputSchema'

export const TestCatalogApprovalGroupByArgsSchema: z.ZodType<Prisma.TestCatalogApprovalGroupByArgs> = z.object({
  where: TestCatalogApprovalWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogApprovalOrderByWithAggregationInputSchema.array(), TestCatalogApprovalOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogApprovalScalarFieldEnumSchema.array(), 
  having: TestCatalogApprovalScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogApprovalGroupByArgsSchema;
