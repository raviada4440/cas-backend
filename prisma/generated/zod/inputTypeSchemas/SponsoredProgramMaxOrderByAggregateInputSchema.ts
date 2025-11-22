import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SponsoredProgramMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SponsoredProgramMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  sponsorId: z.lazy(() => SortOrderSchema).optional(),
  therapeuticArea: z.lazy(() => SortOrderSchema).optional(),
  programName: z.lazy(() => SortOrderSchema).optional(),
  programUrl: z.lazy(() => SortOrderSchema).optional(),
  programLabUrl: z.lazy(() => SortOrderSchema).optional(),
  sponsoredTestingUrl: z.lazy(() => SortOrderSchema).optional(),
  programEligibility: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default SponsoredProgramMaxOrderByAggregateInputSchema;
