import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogAuditLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogAuditLogOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogAuditLogOrderByRelationAggregateInputSchema;
