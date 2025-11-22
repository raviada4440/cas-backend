import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SponsorCountOrderByAggregateInputSchema } from './SponsorCountOrderByAggregateInputSchema';
import { SponsorMaxOrderByAggregateInputSchema } from './SponsorMaxOrderByAggregateInputSchema';
import { SponsorMinOrderByAggregateInputSchema } from './SponsorMinOrderByAggregateInputSchema';

export const SponsorOrderByWithAggregationInputSchema: z.ZodType<Prisma.SponsorOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  sponsorName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sponsorCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sponsorWebsite: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sponsorType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  zip: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SponsorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SponsorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SponsorMinOrderByAggregateInputSchema).optional(),
});

export default SponsorOrderByWithAggregationInputSchema;
