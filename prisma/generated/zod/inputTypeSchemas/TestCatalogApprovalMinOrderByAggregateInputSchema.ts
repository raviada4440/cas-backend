import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogApprovalMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogApprovalMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  testConfigurationId: z.lazy(() => SortOrderSchema).optional(),
  workflowStep: z.lazy(() => SortOrderSchema).optional(),
  stepName: z.lazy(() => SortOrderSchema).optional(),
  requiredRole: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.lazy(() => SortOrderSchema).optional(),
  approvedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogApprovalMinOrderByAggregateInputSchema;
