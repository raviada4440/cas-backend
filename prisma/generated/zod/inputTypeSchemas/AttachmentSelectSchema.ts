import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderAttachmentFindManyArgsSchema"
import { AttachmentCountOutputTypeArgsSchema } from "../outputTypeSchemas/AttachmentCountOutputTypeArgsSchema"

export const AttachmentSelectSchema: z.ZodType<Prisma.AttachmentSelect> = z.object({
  id: z.boolean().optional(),
  attachmentType: z.boolean().optional(),
  attachmentUrl: z.boolean().optional(),
  fileName: z.boolean().optional(),
  fileType: z.boolean().optional(),
  fileSize: z.boolean().optional(),
  fileExt: z.boolean().optional(),
  bucketName: z.boolean().optional(),
  storageKey: z.boolean().optional(),
  url: z.boolean().optional(),
  previewUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrderAttachments: z.union([z.boolean(),z.lazy(() => LabOrderAttachmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AttachmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AttachmentSelectSchema;
