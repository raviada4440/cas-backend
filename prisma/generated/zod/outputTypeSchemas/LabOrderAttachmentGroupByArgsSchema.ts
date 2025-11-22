import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentWhereInputSchema } from '../inputTypeSchemas/LabOrderAttachmentWhereInputSchema'
import { LabOrderAttachmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderAttachmentOrderByWithAggregationInputSchema'
import { LabOrderAttachmentScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderAttachmentScalarFieldEnumSchema'
import { LabOrderAttachmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderAttachmentScalarWhereWithAggregatesInputSchema'

export const LabOrderAttachmentGroupByArgsSchema: z.ZodType<Prisma.LabOrderAttachmentGroupByArgs> = z.object({
  where: LabOrderAttachmentWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderAttachmentOrderByWithAggregationInputSchema.array(), LabOrderAttachmentOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderAttachmentScalarFieldEnumSchema.array(), 
  having: LabOrderAttachmentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderAttachmentGroupByArgsSchema;
