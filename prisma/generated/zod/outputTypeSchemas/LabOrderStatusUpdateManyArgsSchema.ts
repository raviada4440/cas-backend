import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderStatusUpdateManyMutationInputSchema'
import { LabOrderStatusUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderStatusUncheckedUpdateManyInputSchema'
import { LabOrderStatusWhereInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereInputSchema'

export const LabOrderStatusUpdateManyArgsSchema: z.ZodType<Prisma.LabOrderStatusUpdateManyArgs> = z.object({
  data: z.union([ LabOrderStatusUpdateManyMutationInputSchema, LabOrderStatusUncheckedUpdateManyInputSchema ]),
  where: LabOrderStatusWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderStatusUpdateManyArgsSchema;
