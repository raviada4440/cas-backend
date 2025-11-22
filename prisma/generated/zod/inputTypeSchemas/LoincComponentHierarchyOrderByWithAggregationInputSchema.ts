import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LoincComponentHierarchyCountOrderByAggregateInputSchema } from './LoincComponentHierarchyCountOrderByAggregateInputSchema';
import { LoincComponentHierarchyAvgOrderByAggregateInputSchema } from './LoincComponentHierarchyAvgOrderByAggregateInputSchema';
import { LoincComponentHierarchyMaxOrderByAggregateInputSchema } from './LoincComponentHierarchyMaxOrderByAggregateInputSchema';
import { LoincComponentHierarchyMinOrderByAggregateInputSchema } from './LoincComponentHierarchyMinOrderByAggregateInputSchema';
import { LoincComponentHierarchySumOrderByAggregateInputSchema } from './LoincComponentHierarchySumOrderByAggregateInputSchema';

export const LoincComponentHierarchyOrderByWithAggregationInputSchema: z.ZodType<Prisma.LoincComponentHierarchyOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  sequence: z.lazy(() => SortOrderSchema).optional(),
  codeText: z.lazy(() => SortOrderSchema).optional(),
  component: z.lazy(() => SortOrderSchema).optional(),
  property: z.lazy(() => SortOrderSchema).optional(),
  timing: z.lazy(() => SortOrderSchema).optional(),
  scale: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LoincComponentHierarchyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LoincComponentHierarchyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LoincComponentHierarchyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LoincComponentHierarchyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LoincComponentHierarchySumOrderByAggregateInputSchema).optional(),
});

export default LoincComponentHierarchyOrderByWithAggregationInputSchema;
