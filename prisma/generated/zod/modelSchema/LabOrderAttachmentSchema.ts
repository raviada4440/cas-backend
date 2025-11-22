import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { AttachmentWithRelationsSchema, AttachmentPartialWithRelationsSchema } from './AttachmentSchema'
import type { AttachmentWithRelations, AttachmentPartialWithRelations } from './AttachmentSchema'

/////////////////////////////////////////
// LAB ORDER ATTACHMENT SCHEMA
/////////////////////////////////////////

export const LabOrderAttachmentSchema = z.object({
  id: z.string(),
  labOrderId: z.string().nullable(),
  attachmentId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderAttachment = z.infer<typeof LabOrderAttachmentSchema>

/////////////////////////////////////////
// LAB ORDER ATTACHMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderAttachmentPartialSchema = LabOrderAttachmentSchema.partial()

export type LabOrderAttachmentPartial = z.infer<typeof LabOrderAttachmentPartialSchema>

/////////////////////////////////////////
// LAB ORDER ATTACHMENT RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderAttachmentRelations = {
  labOrder?: LabOrderWithRelations | null;
  attachment?: AttachmentWithRelations | null;
};

export type LabOrderAttachmentWithRelations = z.infer<typeof LabOrderAttachmentSchema> & LabOrderAttachmentRelations

export const LabOrderAttachmentWithRelationsSchema: z.ZodType<LabOrderAttachmentWithRelations> = LabOrderAttachmentSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema).nullable(),
  attachment: z.lazy(() => AttachmentWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER ATTACHMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderAttachmentPartialRelations = {
  labOrder?: LabOrderPartialWithRelations | null;
  attachment?: AttachmentPartialWithRelations | null;
};

export type LabOrderAttachmentPartialWithRelations = z.infer<typeof LabOrderAttachmentPartialSchema> & LabOrderAttachmentPartialRelations

export const LabOrderAttachmentPartialWithRelationsSchema: z.ZodType<LabOrderAttachmentPartialWithRelations> = LabOrderAttachmentPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
  attachment: z.lazy(() => AttachmentPartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderAttachmentWithPartialRelations = z.infer<typeof LabOrderAttachmentSchema> & LabOrderAttachmentPartialRelations

export const LabOrderAttachmentWithPartialRelationsSchema: z.ZodType<LabOrderAttachmentWithPartialRelations> = LabOrderAttachmentSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
  attachment: z.lazy(() => AttachmentPartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderAttachmentSchema;
