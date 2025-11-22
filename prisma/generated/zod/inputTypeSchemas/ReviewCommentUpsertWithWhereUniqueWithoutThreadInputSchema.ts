import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentWhereUniqueInputSchema } from './ReviewCommentWhereUniqueInputSchema';
import { ReviewCommentUpdateWithoutThreadInputSchema } from './ReviewCommentUpdateWithoutThreadInputSchema';
import { ReviewCommentUncheckedUpdateWithoutThreadInputSchema } from './ReviewCommentUncheckedUpdateWithoutThreadInputSchema';
import { ReviewCommentCreateWithoutThreadInputSchema } from './ReviewCommentCreateWithoutThreadInputSchema';
import { ReviewCommentUncheckedCreateWithoutThreadInputSchema } from './ReviewCommentUncheckedCreateWithoutThreadInputSchema';

export const ReviewCommentUpsertWithWhereUniqueWithoutThreadInputSchema: z.ZodType<Prisma.ReviewCommentUpsertWithWhereUniqueWithoutThreadInput> = z.strictObject({
  where: z.lazy(() => ReviewCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewCommentUpdateWithoutThreadInputSchema), z.lazy(() => ReviewCommentUncheckedUpdateWithoutThreadInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCommentCreateWithoutThreadInputSchema), z.lazy(() => ReviewCommentUncheckedCreateWithoutThreadInputSchema) ]),
});

export default ReviewCommentUpsertWithWhereUniqueWithoutThreadInputSchema;
