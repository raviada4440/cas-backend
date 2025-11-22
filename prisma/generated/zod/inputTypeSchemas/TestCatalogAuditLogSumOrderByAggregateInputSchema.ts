import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogAuditLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogAuditLogSumOrderByAggregateInput> = z.strictObject({
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogAuditLogSumOrderByAggregateInputSchema;
