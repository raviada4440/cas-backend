import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"

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

export default TestCatalogApprovalSelectSchema;
