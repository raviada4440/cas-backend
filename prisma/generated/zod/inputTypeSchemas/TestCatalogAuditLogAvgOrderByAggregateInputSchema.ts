import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogAuditLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogAuditLogAvgOrderByAggregateInput> = z.strictObject({
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogAuditLogAvgOrderByAggregateInputSchema;
