import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LoincPanelHierarchyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyMaxOrderByAggregateInput> = z.strictObject({
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
});

export default LoincPanelHierarchyMaxOrderByAggregateInputSchema;
