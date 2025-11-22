import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadIncludeSchema } from '../inputTypeSchemas/ReviewThreadIncludeSchema'
import { ReviewThreadCreateInputSchema } from '../inputTypeSchemas/ReviewThreadCreateInputSchema'
import { ReviewThreadUncheckedCreateInputSchema } from '../inputTypeSchemas/ReviewThreadUncheckedCreateInputSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { ReviewCommentFindManyArgsSchema } from "../outputTypeSchemas/ReviewCommentFindManyArgsSchema"
import { ReviewThreadCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReviewThreadCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewThreadSelectSchema: z.ZodType<Prisma.ReviewThreadSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  resolvedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => ReviewCommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReviewThreadCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ReviewThreadCreateArgsSchema: z.ZodType<Prisma.ReviewThreadCreateArgs> = z.object({
  select: ReviewThreadSelectSchema.optional(),
  include: z.lazy(() => ReviewThreadIncludeSchema).optional(),
  data: z.union([ ReviewThreadCreateInputSchema, ReviewThreadUncheckedCreateInputSchema ]),
}).strict();

export default ReviewThreadCreateArgsSchema;
