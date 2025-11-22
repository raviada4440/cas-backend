import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BiomarkerMinOrderByAggregateInputSchema: z.ZodType<Prisma.BiomarkerMinOrderByAggregateInput> = z.strictObject({
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  hgncStatus: z.lazy(() => SortOrderSchema).optional(),
  hgncApprovedSymbol: z.lazy(() => SortOrderSchema).optional(),
  hgncApprovedName: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default BiomarkerMinOrderByAggregateInputSchema;
