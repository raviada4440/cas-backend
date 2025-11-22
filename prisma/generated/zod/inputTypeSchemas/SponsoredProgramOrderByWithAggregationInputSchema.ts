import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SponsoredProgramCountOrderByAggregateInputSchema } from './SponsoredProgramCountOrderByAggregateInputSchema';
import { SponsoredProgramMaxOrderByAggregateInputSchema } from './SponsoredProgramMaxOrderByAggregateInputSchema';
import { SponsoredProgramMinOrderByAggregateInputSchema } from './SponsoredProgramMinOrderByAggregateInputSchema';

export const SponsoredProgramOrderByWithAggregationInputSchema: z.ZodType<Prisma.SponsoredProgramOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  sponsorId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  therapeuticArea: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  programName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  programUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  programLabUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sponsoredTestingUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  programEligibility: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SponsoredProgramCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SponsoredProgramMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SponsoredProgramMinOrderByAggregateInputSchema).optional(),
});

export default SponsoredProgramOrderByWithAggregationInputSchema;
