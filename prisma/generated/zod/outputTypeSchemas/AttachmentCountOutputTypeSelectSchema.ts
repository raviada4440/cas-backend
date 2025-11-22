import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AttachmentCountOutputTypeSelectSchema: z.ZodType<Prisma.AttachmentCountOutputTypeSelect> = z.object({
  labOrderAttachments: z.boolean().optional(),
}).strict();

export default AttachmentCountOutputTypeSelectSchema;
