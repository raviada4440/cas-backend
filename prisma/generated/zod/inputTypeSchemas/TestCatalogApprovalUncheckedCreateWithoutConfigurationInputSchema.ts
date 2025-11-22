import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';

export const TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogApprovalUncheckedCreateWithoutConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string().optional().nullable(),
  workflowStep: z.number().optional(),
  stepName: z.string(),
  requiredRole: z.string().optional().nullable(),
  status: z.lazy(() => ApprovalStatusSchema).optional(),
  comments: z.string().optional().nullable(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema;
