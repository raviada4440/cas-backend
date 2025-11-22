import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BiomarkerCountOrderByAggregateInputSchema } from './BiomarkerCountOrderByAggregateInputSchema';
import { BiomarkerMaxOrderByAggregateInputSchema } from './BiomarkerMaxOrderByAggregateInputSchema';
import { BiomarkerMinOrderByAggregateInputSchema } from './BiomarkerMinOrderByAggregateInputSchema';

export const BiomarkerOrderByWithAggregationInputSchema: z.ZodType<Prisma.BiomarkerOrderByWithAggregationInput> = z.strictObject({
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  hgncStatus: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  hgncApprovedSymbol: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  hgncApprovedName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BiomarkerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BiomarkerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BiomarkerMinOrderByAggregateInputSchema).optional(),
});

export default BiomarkerOrderByWithAggregationInputSchema;
