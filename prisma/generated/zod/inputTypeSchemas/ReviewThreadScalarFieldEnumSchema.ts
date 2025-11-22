import { z } from 'zod';

export const ReviewThreadScalarFieldEnumSchema = z.enum(['id','versionId','createdBy','createdAt','resolvedAt','title']);

export default ReviewThreadScalarFieldEnumSchema;
