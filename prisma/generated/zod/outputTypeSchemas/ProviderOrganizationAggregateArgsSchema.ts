import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderOrganizationWhereInputSchema } from '../inputTypeSchemas/ProviderOrganizationWhereInputSchema'
import { ProviderOrganizationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProviderOrganizationOrderByWithRelationInputSchema'
import { ProviderOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderOrganizationWhereUniqueInputSchema'

export const ProviderOrganizationAggregateArgsSchema: z.ZodType<Prisma.ProviderOrganizationAggregateArgs> = z.object({
  where: ProviderOrganizationWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderOrganizationOrderByWithRelationInputSchema.array(), ProviderOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: ProviderOrganizationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderOrganizationAggregateArgsSchema;
