import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestUpdateManyMutationInputSchema'
import { ProviderFavoriteTestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestUncheckedUpdateManyInputSchema'
import { ProviderFavoriteTestWhereInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereInputSchema'

export const ProviderFavoriteTestUpdateManyArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestUpdateManyArgs> = z.object({
  data: z.union([ ProviderFavoriteTestUpdateManyMutationInputSchema, ProviderFavoriteTestUncheckedUpdateManyInputSchema ]),
  where: ProviderFavoriteTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderFavoriteTestUpdateManyArgsSchema;
