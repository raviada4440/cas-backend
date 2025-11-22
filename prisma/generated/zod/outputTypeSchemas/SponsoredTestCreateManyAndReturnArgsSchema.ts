import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestCreateManyInputSchema } from '../inputTypeSchemas/SponsoredTestCreateManyInputSchema'

export const SponsoredTestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SponsoredTestCreateManyAndReturnArgs> = z.object({
  data: z.union([ SponsoredTestCreateManyInputSchema, SponsoredTestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SponsoredTestCreateManyAndReturnArgsSchema;
