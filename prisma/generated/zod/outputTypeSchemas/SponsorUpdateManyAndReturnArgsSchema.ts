import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorUpdateManyMutationInputSchema } from '../inputTypeSchemas/SponsorUpdateManyMutationInputSchema'
import { SponsorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SponsorUncheckedUpdateManyInputSchema'
import { SponsorWhereInputSchema } from '../inputTypeSchemas/SponsorWhereInputSchema'

export const SponsorUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SponsorUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SponsorUpdateManyMutationInputSchema, SponsorUncheckedUpdateManyInputSchema ]),
  where: SponsorWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SponsorUpdateManyAndReturnArgsSchema;
