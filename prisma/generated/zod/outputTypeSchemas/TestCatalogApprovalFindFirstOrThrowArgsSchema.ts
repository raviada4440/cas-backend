import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalIncludeSchema } from '../inputTypeSchemas/TestCatalogApprovalIncludeSchema'
import { TestCatalogApprovalWhereInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereInputSchema'
import { TestCatalogApprovalOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogApprovalOrderByWithRelationInputSchema'
import { TestCatalogApprovalWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereUniqueInputSchema'
import { TestCatalogApprovalScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogApprovalScalarFieldEnumSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogApprovalSelectSchema: z.ZodType<Prisma.TestCatalogApprovalSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  testConfigurationId: z.boolean().optional(),
  workflowStep: z.boolean().optional(),
  stepName: z.boolean().optional(),
  requiredRole: z.boolean().optional(),
  status: z.boolean().optional(),
  comments: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
}).strict()

export const TestCatalogApprovalFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestCatalogApprovalFindFirstOrThrowArgs> = z.object({
  select: TestCatalogApprovalSelectSchema.optional(),
  include: z.lazy(() => TestCatalogApprovalIncludeSchema).optional(),
  where: TestCatalogApprovalWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogApprovalOrderByWithRelationInputSchema.array(), TestCatalogApprovalOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogApprovalWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogApprovalScalarFieldEnumSchema, TestCatalogApprovalScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestCatalogApprovalFindFirstOrThrowArgsSchema;
