import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogApprovalOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogApprovalOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogApprovalOrderByRelationAggregateInputSchema;
