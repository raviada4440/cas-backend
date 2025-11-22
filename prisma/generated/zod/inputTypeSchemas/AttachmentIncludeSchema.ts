import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderAttachmentFindManyArgsSchema"
import { AttachmentCountOutputTypeArgsSchema } from "../outputTypeSchemas/AttachmentCountOutputTypeArgsSchema"

export const AttachmentIncludeSchema: z.ZodType<Prisma.AttachmentInclude> = z.object({
  labOrderAttachments: z.union([z.boolean(),z.lazy(() => LabOrderAttachmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AttachmentCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default AttachmentIncludeSchema;
