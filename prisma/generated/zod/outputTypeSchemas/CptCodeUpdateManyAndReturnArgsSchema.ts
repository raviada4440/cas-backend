import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeUpdateManyMutationInputSchema } from '../inputTypeSchemas/CptCodeUpdateManyMutationInputSchema'
import { CptCodeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CptCodeUncheckedUpdateManyInputSchema'
import { CptCodeWhereInputSchema } from '../inputTypeSchemas/CptCodeWhereInputSchema'

export const CptCodeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CptCodeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CptCodeUpdateManyMutationInputSchema, CptCodeUncheckedUpdateManyInputSchema ]),
  where: CptCodeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CptCodeUpdateManyAndReturnArgsSchema;
