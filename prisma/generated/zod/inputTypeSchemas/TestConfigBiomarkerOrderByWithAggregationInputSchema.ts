import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestConfigBiomarkerCountOrderByAggregateInputSchema } from './TestConfigBiomarkerCountOrderByAggregateInputSchema';
import { TestConfigBiomarkerAvgOrderByAggregateInputSchema } from './TestConfigBiomarkerAvgOrderByAggregateInputSchema';
import { TestConfigBiomarkerMaxOrderByAggregateInputSchema } from './TestConfigBiomarkerMaxOrderByAggregateInputSchema';
import { TestConfigBiomarkerMinOrderByAggregateInputSchema } from './TestConfigBiomarkerMinOrderByAggregateInputSchema';
import { TestConfigBiomarkerSumOrderByAggregateInputSchema } from './TestConfigBiomarkerSumOrderByAggregateInputSchema';

export const TestConfigBiomarkerOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  reportTier: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isReportable: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  displayOrder: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestConfigBiomarkerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestConfigBiomarkerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestConfigBiomarkerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestConfigBiomarkerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestConfigBiomarkerSumOrderByAggregateInputSchema).optional(),
});

export default TestConfigBiomarkerOrderByWithAggregationInputSchema;
