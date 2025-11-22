import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { ReviewCommentFindManyArgsSchema } from "../outputTypeSchemas/ReviewCommentFindManyArgsSchema"
import { ReviewThreadCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReviewThreadCountOutputTypeArgsSchema"

export const ReviewThreadIncludeSchema: z.ZodType<Prisma.ReviewThreadInclude> = z.object({
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => ReviewCommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReviewThreadCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default ReviewThreadIncludeSchema;
