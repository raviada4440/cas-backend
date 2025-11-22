import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabUpdateManyMutationInputSchema'
import { LabUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabUncheckedUpdateManyInputSchema'
import { LabWhereInputSchema } from '../inputTypeSchemas/LabWhereInputSchema'

export const LabUpdateManyArgsSchema: z.ZodType<Prisma.LabUpdateManyArgs> = z.object({
  data: z.union([ LabUpdateManyMutationInputSchema, LabUncheckedUpdateManyInputSchema ]),
  where: LabWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabUpdateManyArgsSchema;
