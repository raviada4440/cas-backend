import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestUpdateManyMutationInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestUpdateManyMutationInputSchema'
import { OrganizationFavoriteTestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestUncheckedUpdateManyInputSchema'
import { OrganizationFavoriteTestWhereInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereInputSchema'

export const OrganizationFavoriteTestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OrganizationFavoriteTestUpdateManyMutationInputSchema, OrganizationFavoriteTestUncheckedUpdateManyInputSchema ]),
  where: OrganizationFavoriteTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrganizationFavoriteTestUpdateManyAndReturnArgsSchema;
