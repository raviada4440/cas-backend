import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AttachmentCreateWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.AttachmentCreateWithoutLabOrderAttachmentsInput> = z.strictObject({
  id: z.string().optional(),
  attachmentType: z.string().optional().nullable(),
  attachmentUrl: z.string().optional().nullable(),
  fileName: z.string(),
  fileType: z.string(),
  fileSize: z.number(),
  fileExt: z.string().optional().nullable(),
  bucketName: z.string(),
  storageKey: z.string(),
  url: z.string().optional().nullable(),
  previewUrl: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default AttachmentCreateWithoutLabOrderAttachmentsInputSchema;
