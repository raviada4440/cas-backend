import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorCreateManyInputSchema } from '../inputTypeSchemas/SponsorCreateManyInputSchema'

export const SponsorCreateManyArgsSchema: z.ZodType<Prisma.SponsorCreateManyArgs> = z.object({
  data: z.union([ SponsorCreateManyInputSchema, SponsorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SponsorCreateManyArgsSchema;
