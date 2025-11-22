import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestWhereInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereInputSchema'
import { OrganizationFavoriteTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestOrderByWithRelationInputSchema'
import { OrganizationFavoriteTestWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereUniqueInputSchema'

export const OrganizationFavoriteTestAggregateArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestAggregateArgs> = z.object({
  where: OrganizationFavoriteTestWhereInputSchema.optional(), 
  orderBy: z.union([ OrganizationFavoriteTestOrderByWithRelationInputSchema.array(), OrganizationFavoriteTestOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationFavoriteTestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrganizationFavoriteTestAggregateArgsSchema;
