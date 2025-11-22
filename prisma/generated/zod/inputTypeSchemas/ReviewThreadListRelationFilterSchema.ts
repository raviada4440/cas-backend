import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadWhereInputSchema } from './ReviewThreadWhereInputSchema';

export const ReviewThreadListRelationFilterSchema: z.ZodType<Prisma.ReviewThreadListRelationFilter> = z.strictObject({
  every: z.lazy(() => ReviewThreadWhereInputSchema).optional(),
  some: z.lazy(() => ReviewThreadWhereInputSchema).optional(),
  none: z.lazy(() => ReviewThreadWhereInputSchema).optional(),
});

export default ReviewThreadListRelationFilterSchema;
