import { z } from 'zod';
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { ReviewCommentWithRelationsSchema, ReviewCommentPartialWithRelationsSchema } from './ReviewCommentSchema'
import type { ReviewCommentWithRelations, ReviewCommentPartialWithRelations } from './ReviewCommentSchema'

/////////////////////////////////////////
// REVIEW THREAD SCHEMA
/////////////////////////////////////////

export const ReviewThreadSchema = z.object({
  id: z.string(),
  versionId: z.string(),
  createdBy: z.string(),
  createdAt: z.date(),
  resolvedAt: z.date().nullable(),
  title: z.string().nullable(),
})

export type ReviewThread = z.infer<typeof ReviewThreadSchema>

/////////////////////////////////////////
// REVIEW THREAD PARTIAL SCHEMA
/////////////////////////////////////////

export const ReviewThreadPartialSchema = ReviewThreadSchema.partial()

export type ReviewThreadPartial = z.infer<typeof ReviewThreadPartialSchema>

/////////////////////////////////////////
// REVIEW THREAD RELATION SCHEMA
/////////////////////////////////////////

export type ReviewThreadRelations = {
  version: TestCatalogVersionWithRelations;
  comments: ReviewCommentWithRelations[];
};

export type ReviewThreadWithRelations = z.infer<typeof ReviewThreadSchema> & ReviewThreadRelations

export const ReviewThreadWithRelationsSchema: z.ZodType<ReviewThreadWithRelations> = ReviewThreadSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  comments: z.lazy(() => ReviewCommentWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// REVIEW THREAD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ReviewThreadPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
  comments?: ReviewCommentPartialWithRelations[];
};

export type ReviewThreadPartialWithRelations = z.infer<typeof ReviewThreadPartialSchema> & ReviewThreadPartialRelations

export const ReviewThreadPartialWithRelationsSchema: z.ZodType<ReviewThreadPartialWithRelations> = ReviewThreadPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  comments: z.lazy(() => ReviewCommentPartialWithRelationsSchema).array(),
})).partial()

export type ReviewThreadWithPartialRelations = z.infer<typeof ReviewThreadSchema> & ReviewThreadPartialRelations

export const ReviewThreadWithPartialRelationsSchema: z.ZodType<ReviewThreadWithPartialRelations> = ReviewThreadSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  comments: z.lazy(() => ReviewCommentPartialWithRelationsSchema).array(),
}).partial())

export default ReviewThreadSchema;
