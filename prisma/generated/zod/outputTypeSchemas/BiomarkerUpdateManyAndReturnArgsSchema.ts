import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerUpdateManyMutationInputSchema } from '../inputTypeSchemas/BiomarkerUpdateManyMutationInputSchema'
import { BiomarkerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BiomarkerUncheckedUpdateManyInputSchema'
import { BiomarkerWhereInputSchema } from '../inputTypeSchemas/BiomarkerWhereInputSchema'

export const BiomarkerUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BiomarkerUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BiomarkerUpdateManyMutationInputSchema, BiomarkerUncheckedUpdateManyInputSchema ]),
  where: BiomarkerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default BiomarkerUpdateManyAndReturnArgsSchema;
