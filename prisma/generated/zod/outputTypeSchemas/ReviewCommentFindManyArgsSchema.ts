import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentIncludeSchema } from '../inputTypeSchemas/ReviewCommentIncludeSchema'
import { ReviewCommentWhereInputSchema } from '../inputTypeSchemas/ReviewCommentWhereInputSchema'
import { ReviewCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReviewCommentOrderByWithRelationInputSchema'
import { ReviewCommentWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewCommentWhereUniqueInputSchema'
import { ReviewCommentScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewCommentScalarFieldEnumSchema'
import { ReviewThreadArgsSchema } from "../outputTypeSchemas/ReviewThreadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewCommentSelectSchema: z.ZodType<Prisma.ReviewCommentSelect> = z.object({
  id: z.boolean().optional(),
  threadId: z.boolean().optional(),
  body: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  thread: z.union([z.boolean(),z.lazy(() => ReviewThreadArgsSchema)]).optional(),
}).strict()

export const ReviewCommentFindManyArgsSchema: z.ZodType<Prisma.ReviewCommentFindManyArgs> = z.object({
  select: ReviewCommentSelectSchema.optional(),
  include: z.lazy(() => ReviewCommentIncludeSchema).optional(),
  where: ReviewCommentWhereInputSchema.optional(), 
  orderBy: z.union([ ReviewCommentOrderByWithRelationInputSchema.array(), ReviewCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewCommentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewCommentScalarFieldEnumSchema, ReviewCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ReviewCommentFindManyArgsSchema;
