import { z } from 'zod';
import { LabOrderAttachmentWithRelationsSchema, LabOrderAttachmentPartialWithRelationsSchema } from './LabOrderAttachmentSchema'
import type { LabOrderAttachmentWithRelations, LabOrderAttachmentPartialWithRelations } from './LabOrderAttachmentSchema'

/////////////////////////////////////////
// ATTACHMENT SCHEMA
/////////////////////////////////////////

export const AttachmentSchema = z.object({
  id: z.string(),
  attachmentType: z.string().nullable(),
  attachmentUrl: z.string().nullable(),
  fileName: z.string(),
  fileType: z.string(),
  fileSize: z.number(),
  fileExt: z.string().nullable(),
  bucketName: z.string(),
  storageKey: z.string(),
  url: z.string().nullable(),
  previewUrl: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Attachment = z.infer<typeof AttachmentSchema>

/////////////////////////////////////////
// ATTACHMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const AttachmentPartialSchema = AttachmentSchema.partial()

export type AttachmentPartial = z.infer<typeof AttachmentPartialSchema>

/////////////////////////////////////////
// ATTACHMENT RELATION SCHEMA
/////////////////////////////////////////

export type AttachmentRelations = {
  labOrderAttachments: LabOrderAttachmentWithRelations[];
};

export type AttachmentWithRelations = z.infer<typeof AttachmentSchema> & AttachmentRelations

export const AttachmentWithRelationsSchema: z.ZodType<AttachmentWithRelations> = AttachmentSchema.merge(z.object({
  labOrderAttachments: z.lazy(() => LabOrderAttachmentWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ATTACHMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AttachmentPartialRelations = {
  labOrderAttachments?: LabOrderAttachmentPartialWithRelations[];
};

export type AttachmentPartialWithRelations = z.infer<typeof AttachmentPartialSchema> & AttachmentPartialRelations

export const AttachmentPartialWithRelationsSchema: z.ZodType<AttachmentPartialWithRelations> = AttachmentPartialSchema.merge(z.object({
  labOrderAttachments: z.lazy(() => LabOrderAttachmentPartialWithRelationsSchema).array(),
})).partial()

export type AttachmentWithPartialRelations = z.infer<typeof AttachmentSchema> & AttachmentPartialRelations

export const AttachmentWithPartialRelationsSchema: z.ZodType<AttachmentWithPartialRelations> = AttachmentSchema.merge(z.object({
  labOrderAttachments: z.lazy(() => LabOrderAttachmentPartialWithRelationsSchema).array(),
}).partial())

export default AttachmentSchema;
