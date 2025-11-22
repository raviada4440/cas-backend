import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalIncludeSchema } from '../inputTypeSchemas/TestCatalogApprovalIncludeSchema'
import { TestCatalogApprovalCreateInputSchema } from '../inputTypeSchemas/TestCatalogApprovalCreateInputSchema'
import { TestCatalogApprovalUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogApprovalUncheckedCreateInputSchema'
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

export const TestCatalogApprovalCreateArgsSchema: z.ZodType<Prisma.TestCatalogApprovalCreateArgs> = z.object({
  select: TestCatalogApprovalSelectSchema.optional(),
  include: z.lazy(() => TestCatalogApprovalIncludeSchema).optional(),
  data: z.union([ TestCatalogApprovalCreateInputSchema, TestCatalogApprovalUncheckedCreateInputSchema ]),
}).strict();

export default TestCatalogApprovalCreateArgsSchema;
