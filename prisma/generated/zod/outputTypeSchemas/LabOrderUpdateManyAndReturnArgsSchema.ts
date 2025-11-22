import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderUpdateManyMutationInputSchema'
import { LabOrderUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderUncheckedUpdateManyInputSchema'
import { LabOrderWhereInputSchema } from '../inputTypeSchemas/LabOrderWhereInputSchema'

export const LabOrderUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderUpdateManyMutationInputSchema, LabOrderUncheckedUpdateManyInputSchema ]),
  where: LabOrderWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderUpdateManyAndReturnArgsSchema;
