import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SponsoredProgramOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SponsoredProgramOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default SponsoredProgramOrderByRelationAggregateInputSchema;
