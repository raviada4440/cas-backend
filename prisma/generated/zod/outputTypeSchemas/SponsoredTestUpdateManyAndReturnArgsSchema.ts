import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestUpdateManyMutationInputSchema } from '../inputTypeSchemas/SponsoredTestUpdateManyMutationInputSchema'
import { SponsoredTestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SponsoredTestUncheckedUpdateManyInputSchema'
import { SponsoredTestWhereInputSchema } from '../inputTypeSchemas/SponsoredTestWhereInputSchema'

export const SponsoredTestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SponsoredTestUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SponsoredTestUpdateManyMutationInputSchema, SponsoredTestUncheckedUpdateManyInputSchema ]),
  where: SponsoredTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SponsoredTestUpdateManyAndReturnArgsSchema;
