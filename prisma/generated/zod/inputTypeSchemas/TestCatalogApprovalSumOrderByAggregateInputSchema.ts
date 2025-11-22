import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogApprovalSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogApprovalSumOrderByAggregateInput> = z.strictObject({
  workflowStep: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogApprovalSumOrderByAggregateInputSchema;
