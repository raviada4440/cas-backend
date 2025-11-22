import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadIncludeSchema } from '../inputTypeSchemas/ReviewThreadIncludeSchema'
import { ReviewThreadWhereInputSchema } from '../inputTypeSchemas/ReviewThreadWhereInputSchema'
import { ReviewThreadOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReviewThreadOrderByWithRelationInputSchema'
import { ReviewThreadWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewThreadWhereUniqueInputSchema'
import { ReviewThreadScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewThreadScalarFieldEnumSchema'
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

export const ReviewThreadFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReviewThreadFindFirstOrThrowArgs> = z.object({
  select: ReviewThreadSelectSchema.optional(),
  include: z.lazy(() => ReviewThreadIncludeSchema).optional(),
  where: ReviewThreadWhereInputSchema.optional(), 
  orderBy: z.union([ ReviewThreadOrderByWithRelationInputSchema.array(), ReviewThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewThreadWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewThreadScalarFieldEnumSchema, ReviewThreadScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ReviewThreadFindFirstOrThrowArgsSchema;
