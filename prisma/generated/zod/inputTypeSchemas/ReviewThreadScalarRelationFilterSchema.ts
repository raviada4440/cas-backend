import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadWhereInputSchema } from './ReviewThreadWhereInputSchema';

export const ReviewThreadScalarRelationFilterSchema: z.ZodType<Prisma.ReviewThreadScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ReviewThreadWhereInputSchema).optional(),
  isNot: z.lazy(() => ReviewThreadWhereInputSchema).optional(),
});

export default ReviewThreadScalarRelationFilterSchema;
