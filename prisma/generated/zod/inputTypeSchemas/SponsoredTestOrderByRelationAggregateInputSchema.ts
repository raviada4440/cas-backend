import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SponsoredTestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SponsoredTestOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default SponsoredTestOrderByRelationAggregateInputSchema;
