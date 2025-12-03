import { z } from 'zod'

const optionalString = (max = 512) => z.string().trim().min(1).max(max).optional()

export const AttachmentCreateInput = z
  .object({
    attachmentType: optionalString(),
    attachmentUrl: optionalString(),
    fileName: z.string().trim().min(1).max(256),
    fileType: z.string().trim().min(1).max(128),
    fileSize: z.number().int().positive(),
    fileExt: optionalString(16),
    bucketName: z.string().trim().min(1).max(256),
    storageKey: z.string().trim().min(1).max(512),
    url: optionalString(),
    previewUrl: optionalString(),
  })
  .strict()

export const AttachmentResponseSchema = AttachmentCreateInput.extend({
  id: z.string().uuid(),
  attachmentType: z.string().trim().min(1).max(512).nullable(),
  attachmentUrl: z.string().trim().min(1).max(512).nullable(),
  fileExt: z.string().trim().min(1).max(16).nullable(),
  url: z.string().trim().min(1).max(512).nullable(),
  previewUrl: z.string().trim().min(1).max(512).nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export type AttachmentCreateRequest = z.infer<typeof AttachmentCreateInput>
export type AttachmentResponse = z.infer<typeof AttachmentResponseSchema>

