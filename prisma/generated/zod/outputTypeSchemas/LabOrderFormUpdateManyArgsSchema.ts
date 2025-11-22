import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFormUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderFormUpdateManyMutationInputSchema'
import { LabOrderFormUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderFormUncheckedUpdateManyInputSchema'
import { LabOrderFormWhereInputSchema } from '../inputTypeSchemas/LabOrderFormWhereInputSchema'

export const LabOrderFormUpdateManyArgsSchema: z.ZodType<Prisma.LabOrderFormUpdateManyArgs> = z.object({
  data: z.union([ LabOrderFormUpdateManyMutationInputSchema, LabOrderFormUncheckedUpdateManyInputSchema ]),
  where: LabOrderFormWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderFormUpdateManyArgsSchema;
