import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentScalarWhereInputSchema } from './ReviewCommentScalarWhereInputSchema';
import { ReviewCommentUpdateManyMutationInputSchema } from './ReviewCommentUpdateManyMutationInputSchema';
import { ReviewCommentUncheckedUpdateManyWithoutThreadInputSchema } from './ReviewCommentUncheckedUpdateManyWithoutThreadInputSchema';

export const ReviewCommentUpdateManyWithWhereWithoutThreadInputSchema: z.ZodType<Prisma.ReviewCommentUpdateManyWithWhereWithoutThreadInput> = z.strictObject({
  where: z.lazy(() => ReviewCommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewCommentUpdateManyMutationInputSchema), z.lazy(() => ReviewCommentUncheckedUpdateManyWithoutThreadInputSchema) ]),
});

export default ReviewCommentUpdateManyWithWhereWithoutThreadInputSchema;
