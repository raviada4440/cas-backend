import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReviewThreadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReviewThreadOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ReviewThreadOrderByRelationAggregateInputSchema;
