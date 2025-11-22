import { z } from 'zod';
import { ReviewThreadWithRelationsSchema, ReviewThreadPartialWithRelationsSchema } from './ReviewThreadSchema'
import type { ReviewThreadWithRelations, ReviewThreadPartialWithRelations } from './ReviewThreadSchema'

/////////////////////////////////////////
// REVIEW COMMENT SCHEMA
/////////////////////////////////////////

export const ReviewCommentSchema = z.object({
  id: z.string(),
  threadId: z.string(),
  body: z.string(),
  createdBy: z.string(),
  createdAt: z.date(),
})

export type ReviewComment = z.infer<typeof ReviewCommentSchema>

/////////////////////////////////////////
// REVIEW COMMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const ReviewCommentPartialSchema = ReviewCommentSchema.partial()

export type ReviewCommentPartial = z.infer<typeof ReviewCommentPartialSchema>

/////////////////////////////////////////
// REVIEW COMMENT RELATION SCHEMA
/////////////////////////////////////////

export type ReviewCommentRelations = {
  thread: ReviewThreadWithRelations;
};

export type ReviewCommentWithRelations = z.infer<typeof ReviewCommentSchema> & ReviewCommentRelations

export const ReviewCommentWithRelationsSchema: z.ZodType<ReviewCommentWithRelations> = ReviewCommentSchema.merge(z.object({
  thread: z.lazy(() => ReviewThreadWithRelationsSchema),
}))

/////////////////////////////////////////
// REVIEW COMMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ReviewCommentPartialRelations = {
  thread?: ReviewThreadPartialWithRelations;
};

export type ReviewCommentPartialWithRelations = z.infer<typeof ReviewCommentPartialSchema> & ReviewCommentPartialRelations

export const ReviewCommentPartialWithRelationsSchema: z.ZodType<ReviewCommentPartialWithRelations> = ReviewCommentPartialSchema.merge(z.object({
  thread: z.lazy(() => ReviewThreadPartialWithRelationsSchema),
})).partial()

export type ReviewCommentWithPartialRelations = z.infer<typeof ReviewCommentSchema> & ReviewCommentPartialRelations

export const ReviewCommentWithPartialRelationsSchema: z.ZodType<ReviewCommentWithPartialRelations> = ReviewCommentSchema.merge(z.object({
  thread: z.lazy(() => ReviewThreadPartialWithRelationsSchema),
}).partial())

export default ReviewCommentSchema;
