import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestCreateManyInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestCreateManyInputSchema'

export const ProviderFavoriteTestCreateManyArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateManyArgs> = z.object({
  data: z.union([ ProviderFavoriteTestCreateManyInputSchema, ProviderFavoriteTestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProviderFavoriteTestCreateManyArgsSchema;
