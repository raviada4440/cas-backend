import { z } from 'zod';

export const ReviewCommentScalarFieldEnumSchema = z.enum(['id','threadId','body','createdBy','createdAt']);

export default ReviewCommentScalarFieldEnumSchema;
