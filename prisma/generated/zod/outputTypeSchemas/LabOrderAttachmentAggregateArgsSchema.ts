import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentWhereInputSchema } from '../inputTypeSchemas/LabOrderAttachmentWhereInputSchema'
import { LabOrderAttachmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderAttachmentOrderByWithRelationInputSchema'
import { LabOrderAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderAttachmentWhereUniqueInputSchema'

export const LabOrderAttachmentAggregateArgsSchema: z.ZodType<Prisma.LabOrderAttachmentAggregateArgs> = z.object({
  where: LabOrderAttachmentWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderAttachmentOrderByWithRelationInputSchema.array(), LabOrderAttachmentOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderAttachmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderAttachmentAggregateArgsSchema;
