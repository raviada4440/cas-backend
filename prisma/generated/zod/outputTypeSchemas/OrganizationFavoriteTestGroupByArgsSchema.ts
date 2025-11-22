import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestWhereInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestWhereInputSchema'
import { OrganizationFavoriteTestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestOrderByWithAggregationInputSchema'
import { OrganizationFavoriteTestScalarFieldEnumSchema } from '../inputTypeSchemas/OrganizationFavoriteTestScalarFieldEnumSchema'
import { OrganizationFavoriteTestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestScalarWhereWithAggregatesInputSchema'

export const OrganizationFavoriteTestGroupByArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestGroupByArgs> = z.object({
  where: OrganizationFavoriteTestWhereInputSchema.optional(), 
  orderBy: z.union([ OrganizationFavoriteTestOrderByWithAggregationInputSchema.array(), OrganizationFavoriteTestOrderByWithAggregationInputSchema ]).optional(),
  by: OrganizationFavoriteTestScalarFieldEnumSchema.array(), 
  having: OrganizationFavoriteTestScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrganizationFavoriteTestGroupByArgsSchema;
