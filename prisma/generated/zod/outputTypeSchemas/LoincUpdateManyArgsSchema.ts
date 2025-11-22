import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUpdateManyMutationInputSchema } from '../inputTypeSchemas/LoincUpdateManyMutationInputSchema'
import { LoincUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LoincUncheckedUpdateManyInputSchema'
import { LoincWhereInputSchema } from '../inputTypeSchemas/LoincWhereInputSchema'

export const LoincUpdateManyArgsSchema: z.ZodType<Prisma.LoincUpdateManyArgs> = z.object({
  data: z.union([ LoincUpdateManyMutationInputSchema, LoincUncheckedUpdateManyInputSchema ]),
  where: LoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincUpdateManyArgsSchema;
