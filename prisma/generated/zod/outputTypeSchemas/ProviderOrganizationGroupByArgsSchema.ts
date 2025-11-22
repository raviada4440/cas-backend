import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderOrganizationWhereInputSchema } from '../inputTypeSchemas/ProviderOrganizationWhereInputSchema'
import { ProviderOrganizationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProviderOrganizationOrderByWithAggregationInputSchema'
import { ProviderOrganizationScalarFieldEnumSchema } from '../inputTypeSchemas/ProviderOrganizationScalarFieldEnumSchema'
import { ProviderOrganizationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProviderOrganizationScalarWhereWithAggregatesInputSchema'

export const ProviderOrganizationGroupByArgsSchema: z.ZodType<Prisma.ProviderOrganizationGroupByArgs> = z.object({
  where: ProviderOrganizationWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderOrganizationOrderByWithAggregationInputSchema.array(), ProviderOrganizationOrderByWithAggregationInputSchema ]).optional(),
  by: ProviderOrganizationScalarFieldEnumSchema.array(), 
  having: ProviderOrganizationScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderOrganizationGroupByArgsSchema;
