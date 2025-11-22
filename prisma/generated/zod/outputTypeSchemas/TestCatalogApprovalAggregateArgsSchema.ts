import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalWhereInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereInputSchema'
import { TestCatalogApprovalOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogApprovalOrderByWithRelationInputSchema'
import { TestCatalogApprovalWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereUniqueInputSchema'

export const TestCatalogApprovalAggregateArgsSchema: z.ZodType<Prisma.TestCatalogApprovalAggregateArgs> = z.object({
  where: TestCatalogApprovalWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogApprovalOrderByWithRelationInputSchema.array(), TestCatalogApprovalOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogApprovalWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogApprovalAggregateArgsSchema;
