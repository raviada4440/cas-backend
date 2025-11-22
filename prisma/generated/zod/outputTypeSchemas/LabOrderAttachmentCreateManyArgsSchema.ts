import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentCreateManyInputSchema } from '../inputTypeSchemas/LabOrderAttachmentCreateManyInputSchema'

export const LabOrderAttachmentCreateManyArgsSchema: z.ZodType<Prisma.LabOrderAttachmentCreateManyArgs> = z.object({
  data: z.union([ LabOrderAttachmentCreateManyInputSchema, LabOrderAttachmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderAttachmentCreateManyArgsSchema;
