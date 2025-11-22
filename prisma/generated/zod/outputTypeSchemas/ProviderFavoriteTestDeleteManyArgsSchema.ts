import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestWhereInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereInputSchema'

export const ProviderFavoriteTestDeleteManyArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestDeleteManyArgs> = z.object({
  where: ProviderFavoriteTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderFavoriteTestDeleteManyArgsSchema;
