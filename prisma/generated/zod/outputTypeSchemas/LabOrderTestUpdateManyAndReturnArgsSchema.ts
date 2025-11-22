import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderTestUpdateManyMutationInputSchema'
import { LabOrderTestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderTestUncheckedUpdateManyInputSchema'
import { LabOrderTestWhereInputSchema } from '../inputTypeSchemas/LabOrderTestWhereInputSchema'

export const LabOrderTestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderTestUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderTestUpdateManyMutationInputSchema, LabOrderTestUncheckedUpdateManyInputSchema ]),
  where: LabOrderTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderTestUpdateManyAndReturnArgsSchema;
