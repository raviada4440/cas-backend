import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestWhereInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereInputSchema'

export const OrganizationFavoriteTestDeleteManyArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestDeleteManyArgs> = z.object({
  where: OrganizationFavoriteTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrganizationFavoriteTestDeleteManyArgsSchema;
