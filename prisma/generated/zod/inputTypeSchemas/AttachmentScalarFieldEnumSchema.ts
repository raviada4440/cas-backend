import { z } from 'zod';

export const AttachmentScalarFieldEnumSchema = z.enum(['id','attachmentType','attachmentUrl','fileName','fileType','fileSize','fileExt','bucketName','storageKey','url','previewUrl','createdAt','updatedAt']);

export default AttachmentScalarFieldEnumSchema;
