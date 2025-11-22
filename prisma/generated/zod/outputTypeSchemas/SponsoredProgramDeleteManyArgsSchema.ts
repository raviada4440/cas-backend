import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramWhereInputSchema } from '../inputTypeSchemas/SponsoredProgramWhereInputSchema'

export const SponsoredProgramDeleteManyArgsSchema: z.ZodType<Prisma.SponsoredProgramDeleteManyArgs> = z.object({
  where: SponsoredProgramWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SponsoredProgramDeleteManyArgsSchema;
