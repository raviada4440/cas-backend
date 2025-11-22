import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogApprovalCountOrderByAggregateInputSchema } from './TestCatalogApprovalCountOrderByAggregateInputSchema';
import { TestCatalogApprovalAvgOrderByAggregateInputSchema } from './TestCatalogApprovalAvgOrderByAggregateInputSchema';
import { TestCatalogApprovalMaxOrderByAggregateInputSchema } from './TestCatalogApprovalMaxOrderByAggregateInputSchema';
import { TestCatalogApprovalMinOrderByAggregateInputSchema } from './TestCatalogApprovalMinOrderByAggregateInputSchema';
import { TestCatalogApprovalSumOrderByAggregateInputSchema } from './TestCatalogApprovalSumOrderByAggregateInputSchema';

export const TestCatalogApprovalOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogApprovalOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testConfigurationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  workflowStep: z.lazy(() => SortOrderSchema).optional(),
  stepName: z.lazy(() => SortOrderSchema).optional(),
  requiredRole: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  comments: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogApprovalCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogApprovalAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogApprovalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogApprovalMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogApprovalSumOrderByAggregateInputSchema).optional(),
});

export default TestCatalogApprovalOrderByWithAggregationInputSchema;
