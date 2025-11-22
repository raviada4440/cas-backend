import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeUpdateManyMutationInputSchema } from '../inputTypeSchemas/CptCodeUpdateManyMutationInputSchema'
import { CptCodeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CptCodeUncheckedUpdateManyInputSchema'
import { CptCodeWhereInputSchema } from '../inputTypeSchemas/CptCodeWhereInputSchema'

export const CptCodeUpdateManyArgsSchema: z.ZodType<Prisma.CptCodeUpdateManyArgs> = z.object({
  data: z.union([ CptCodeUpdateManyMutationInputSchema, CptCodeUncheckedUpdateManyInputSchema ]),
  where: CptCodeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CptCodeUpdateManyArgsSchema;
