import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestCreateManyInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestCreateManyInputSchema'

export const ProviderFavoriteTestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProviderFavoriteTestCreateManyInputSchema, ProviderFavoriteTestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProviderFavoriteTestCreateManyAndReturnArgsSchema;
