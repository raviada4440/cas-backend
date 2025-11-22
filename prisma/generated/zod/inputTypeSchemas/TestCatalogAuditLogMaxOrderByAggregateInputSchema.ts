import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogAuditLogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogAuditLogMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  fieldName: z.lazy(() => SortOrderSchema).optional(),
  oldValue: z.lazy(() => SortOrderSchema).optional(),
  newValue: z.lazy(() => SortOrderSchema).optional(),
  changeReason: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  performedBy: z.lazy(() => SortOrderSchema).optional(),
  performedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogAuditLogMaxOrderByAggregateInputSchema;
