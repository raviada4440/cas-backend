import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramUpdateManyMutationInputSchema } from '../inputTypeSchemas/SponsoredProgramUpdateManyMutationInputSchema'
import { SponsoredProgramUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SponsoredProgramUncheckedUpdateManyInputSchema'
import { SponsoredProgramWhereInputSchema } from '../inputTypeSchemas/SponsoredProgramWhereInputSchema'

export const SponsoredProgramUpdateManyArgsSchema: z.ZodType<Prisma.SponsoredProgramUpdateManyArgs> = z.object({
  data: z.union([ SponsoredProgramUpdateManyMutationInputSchema, SponsoredProgramUncheckedUpdateManyInputSchema ]),
  where: SponsoredProgramWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SponsoredProgramUpdateManyArgsSchema;
