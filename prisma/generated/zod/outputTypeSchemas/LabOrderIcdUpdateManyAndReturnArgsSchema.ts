import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderIcdUpdateManyMutationInputSchema'
import { LabOrderIcdUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderIcdUncheckedUpdateManyInputSchema'
import { LabOrderIcdWhereInputSchema } from '../inputTypeSchemas/LabOrderIcdWhereInputSchema'

export const LabOrderIcdUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderIcdUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderIcdUpdateManyMutationInputSchema, LabOrderIcdUncheckedUpdateManyInputSchema ]),
  where: LabOrderIcdWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderIcdUpdateManyAndReturnArgsSchema;
