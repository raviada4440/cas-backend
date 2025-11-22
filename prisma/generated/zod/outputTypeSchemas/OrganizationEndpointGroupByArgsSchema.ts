import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointWhereInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereInputSchema'
import { OrganizationEndpointOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OrganizationEndpointOrderByWithAggregationInputSchema'
import { OrganizationEndpointScalarFieldEnumSchema } from '../inputTypeSchemas/OrganizationEndpointScalarFieldEnumSchema'
import { OrganizationEndpointScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OrganizationEndpointScalarWhereWithAggregatesInputSchema'

export const OrganizationEndpointGroupByArgsSchema: z.ZodType<Prisma.OrganizationEndpointGroupByArgs> = z.object({
  where: OrganizationEndpointWhereInputSchema.optional(), 
  orderBy: z.union([ OrganizationEndpointOrderByWithAggregationInputSchema.array(), OrganizationEndpointOrderByWithAggregationInputSchema ]).optional(),
  by: OrganizationEndpointScalarFieldEnumSchema.array(), 
  having: OrganizationEndpointScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrganizationEndpointGroupByArgsSchema;
