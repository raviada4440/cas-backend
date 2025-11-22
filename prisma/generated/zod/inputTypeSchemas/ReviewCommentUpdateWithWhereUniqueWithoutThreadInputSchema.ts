import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentWhereUniqueInputSchema } from './ReviewCommentWhereUniqueInputSchema';
import { ReviewCommentUpdateWithoutThreadInputSchema } from './ReviewCommentUpdateWithoutThreadInputSchema';
import { ReviewCommentUncheckedUpdateWithoutThreadInputSchema } from './ReviewCommentUncheckedUpdateWithoutThreadInputSchema';

export const ReviewCommentUpdateWithWhereUniqueWithoutThreadInputSchema: z.ZodType<Prisma.ReviewCommentUpdateWithWhereUniqueWithoutThreadInput> = z.strictObject({
  where: z.lazy(() => ReviewCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewCommentUpdateWithoutThreadInputSchema), z.lazy(() => ReviewCommentUncheckedUpdateWithoutThreadInputSchema) ]),
});

export default ReviewCommentUpdateWithWhereUniqueWithoutThreadInputSchema;
