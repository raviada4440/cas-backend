import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogAuditLogCountOrderByAggregateInputSchema } from './TestCatalogAuditLogCountOrderByAggregateInputSchema';
import { TestCatalogAuditLogAvgOrderByAggregateInputSchema } from './TestCatalogAuditLogAvgOrderByAggregateInputSchema';
import { TestCatalogAuditLogMaxOrderByAggregateInputSchema } from './TestCatalogAuditLogMaxOrderByAggregateInputSchema';
import { TestCatalogAuditLogMinOrderByAggregateInputSchema } from './TestCatalogAuditLogMinOrderByAggregateInputSchema';
import { TestCatalogAuditLogSumOrderByAggregateInputSchema } from './TestCatalogAuditLogSumOrderByAggregateInputSchema';

export const TestCatalogAuditLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogAuditLogOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  versionNumber: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  configurationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  fieldName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  oldValue: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  newValue: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  changeReason: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogAuditLogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogAuditLogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogAuditLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogAuditLogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogAuditLogSumOrderByAggregateInputSchema).optional(),
});

export default TestCatalogAuditLogOrderByWithAggregationInputSchema;
