import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { TestCatalogConfigurationCreateNestedOneWithoutApprovalsInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutApprovalsInputSchema';

export const TestCatalogApprovalCreateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogApprovalCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  workflowStep: z.number().optional(),
  stepName: z.string(),
  requiredRole: z.string().optional().nullable(),
  status: z.lazy(() => ApprovalStatusSchema).optional(),
  comments: z.string().optional().nullable(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutApprovalsInputSchema).optional(),
});

export default TestCatalogApprovalCreateWithoutVersionInputSchema;
