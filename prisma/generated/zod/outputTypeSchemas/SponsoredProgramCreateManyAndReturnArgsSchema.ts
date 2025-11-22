import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramCreateManyInputSchema } from '../inputTypeSchemas/SponsoredProgramCreateManyInputSchema'

export const SponsoredProgramCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SponsoredProgramCreateManyAndReturnArgs> = z.object({
  data: z.union([ SponsoredProgramCreateManyInputSchema, SponsoredProgramCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SponsoredProgramCreateManyAndReturnArgsSchema;
