import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ExternalIdentifierCountOrderByAggregateInputSchema } from './ExternalIdentifierCountOrderByAggregateInputSchema';
import { ExternalIdentifierMaxOrderByAggregateInputSchema } from './ExternalIdentifierMaxOrderByAggregateInputSchema';
import { ExternalIdentifierMinOrderByAggregateInputSchema } from './ExternalIdentifierMinOrderByAggregateInputSchema';

export const ExternalIdentifierOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExternalIdentifierOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceType: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  system: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ExternalIdentifierCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ExternalIdentifierMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ExternalIdentifierMinOrderByAggregateInputSchema).optional(),
});

export default ExternalIdentifierOrderByWithAggregationInputSchema;
