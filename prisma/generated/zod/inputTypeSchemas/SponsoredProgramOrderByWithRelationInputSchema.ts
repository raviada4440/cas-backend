import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SponsorOrderByWithRelationInputSchema } from './SponsorOrderByWithRelationInputSchema';
import { SponsoredTestOrderByRelationAggregateInputSchema } from './SponsoredTestOrderByRelationAggregateInputSchema';

export const SponsoredProgramOrderByWithRelationInputSchema: z.ZodType<Prisma.SponsoredProgramOrderByWithRelationInput> = z.strictObject({
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
  sponsor: z.lazy(() => SponsorOrderByWithRelationInputSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestOrderByRelationAggregateInputSchema).optional(),
});

export default SponsoredProgramOrderByWithRelationInputSchema;
