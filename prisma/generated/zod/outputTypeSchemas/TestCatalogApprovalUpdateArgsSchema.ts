import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalIncludeSchema } from '../inputTypeSchemas/TestCatalogApprovalIncludeSchema'
import { TestCatalogApprovalUpdateInputSchema } from '../inputTypeSchemas/TestCatalogApprovalUpdateInputSchema'
import { TestCatalogApprovalUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestCatalogApprovalUncheckedUpdateInputSchema'
import { TestCatalogApprovalWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereUniqueInputSchema'
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

export const TestCatalogApprovalUpdateArgsSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateArgs> = z.object({
  select: TestCatalogApprovalSelectSchema.optional(),
  include: z.lazy(() => TestCatalogApprovalIncludeSchema).optional(),
  data: z.union([ TestCatalogApprovalUpdateInputSchema, TestCatalogApprovalUncheckedUpdateInputSchema ]),
  where: TestCatalogApprovalWhereUniqueInputSchema, 
}).strict();

export default TestCatalogApprovalUpdateArgsSchema;
