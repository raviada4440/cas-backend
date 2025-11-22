import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentSelectSchema } from '../inputTypeSchemas/LabOrderAttachmentSelectSchema';
import { LabOrderAttachmentIncludeSchema } from '../inputTypeSchemas/LabOrderAttachmentIncludeSchema';

export const LabOrderAttachmentArgsSchema: z.ZodType<Prisma.LabOrderAttachmentDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderAttachmentSelectSchema).optional(),
  include: z.lazy(() => LabOrderAttachmentIncludeSchema).optional(),
}).strict();

export default LabOrderAttachmentArgsSchema;
