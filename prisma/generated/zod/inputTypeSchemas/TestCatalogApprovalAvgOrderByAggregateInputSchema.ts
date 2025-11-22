import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogApprovalAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogApprovalAvgOrderByAggregateInput> = z.strictObject({
  workflowStep: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogApprovalAvgOrderByAggregateInputSchema;
