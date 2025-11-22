import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointWhereInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereInputSchema'
import { OrganizationEndpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrganizationEndpointOrderByWithRelationInputSchema'
import { OrganizationEndpointWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereUniqueInputSchema'

export const OrganizationEndpointAggregateArgsSchema: z.ZodType<Prisma.OrganizationEndpointAggregateArgs> = z.object({
  where: OrganizationEndpointWhereInputSchema.optional(), 
  orderBy: z.union([ OrganizationEndpointOrderByWithRelationInputSchema.array(), OrganizationEndpointOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationEndpointWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OrganizationEndpointAggregateArgsSchema;
