import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestCreateManyInputSchema } from '../inputTypeSchemas/SponsoredTestCreateManyInputSchema'

export const SponsoredTestCreateManyArgsSchema: z.ZodType<Prisma.SponsoredTestCreateManyArgs> = z.object({
  data: z.union([ SponsoredTestCreateManyInputSchema, SponsoredTestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SponsoredTestCreateManyArgsSchema;
