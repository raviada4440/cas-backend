import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentWhereInputSchema } from '../inputTypeSchemas/LabOrderAttachmentWhereInputSchema'

export const LabOrderAttachmentDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderAttachmentDeleteManyArgs> = z.object({
  where: LabOrderAttachmentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderAttachmentDeleteManyArgsSchema;
