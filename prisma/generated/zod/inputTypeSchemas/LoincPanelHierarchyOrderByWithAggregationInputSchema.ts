import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LoincPanelHierarchyCountOrderByAggregateInputSchema } from './LoincPanelHierarchyCountOrderByAggregateInputSchema';
import { LoincPanelHierarchyAvgOrderByAggregateInputSchema } from './LoincPanelHierarchyAvgOrderByAggregateInputSchema';
import { LoincPanelHierarchyMaxOrderByAggregateInputSchema } from './LoincPanelHierarchyMaxOrderByAggregateInputSchema';
import { LoincPanelHierarchyMinOrderByAggregateInputSchema } from './LoincPanelHierarchyMinOrderByAggregateInputSchema';
import { LoincPanelHierarchySumOrderByAggregateInputSchema } from './LoincPanelHierarchySumOrderByAggregateInputSchema';

export const LoincPanelHierarchyOrderByWithAggregationInputSchema: z.ZodType<Prisma.LoincPanelHierarchyOrderByWithAggregationInput> = z.strictObject({
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
  _count: z.lazy(() => LoincPanelHierarchyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LoincPanelHierarchyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LoincPanelHierarchyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LoincPanelHierarchyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LoincPanelHierarchySumOrderByAggregateInputSchema).optional(),
});

export default LoincPanelHierarchyOrderByWithAggregationInputSchema;
