import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderAttachmentUpdateManyMutationInputSchema'
import { LabOrderAttachmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderAttachmentUncheckedUpdateManyInputSchema'
import { LabOrderAttachmentWhereInputSchema } from '../inputTypeSchemas/LabOrderAttachmentWhereInputSchema'

export const LabOrderAttachmentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderAttachmentUpdateManyMutationInputSchema, LabOrderAttachmentUncheckedUpdateManyInputSchema ]),
  where: LabOrderAttachmentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderAttachmentUpdateManyAndReturnArgsSchema;
