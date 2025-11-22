import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorWhereInputSchema } from '../inputTypeSchemas/SponsorWhereInputSchema'

export const SponsorDeleteManyArgsSchema: z.ZodType<Prisma.SponsorDeleteManyArgs> = z.object({
  where: SponsorWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SponsorDeleteManyArgsSchema;
