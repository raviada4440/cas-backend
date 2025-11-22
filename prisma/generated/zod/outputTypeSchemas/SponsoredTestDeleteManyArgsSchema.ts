import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestWhereInputSchema } from '../inputTypeSchemas/SponsoredTestWhereInputSchema'

export const SponsoredTestDeleteManyArgsSchema: z.ZodType<Prisma.SponsoredTestDeleteManyArgs> = z.object({
  where: SponsoredTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SponsoredTestDeleteManyArgsSchema;
