import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderEducationWhereInputSchema } from '../inputTypeSchemas/ProviderEducationWhereInputSchema'
import { ProviderEducationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProviderEducationOrderByWithAggregationInputSchema'
import { ProviderEducationScalarFieldEnumSchema } from '../inputTypeSchemas/ProviderEducationScalarFieldEnumSchema'
import { ProviderEducationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProviderEducationScalarWhereWithAggregatesInputSchema'

export const ProviderEducationGroupByArgsSchema: z.ZodType<Prisma.ProviderEducationGroupByArgs> = z.object({
  where: ProviderEducationWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderEducationOrderByWithAggregationInputSchema.array(), ProviderEducationOrderByWithAggregationInputSchema ]).optional(),
  by: ProviderEducationScalarFieldEnumSchema.array(), 
  having: ProviderEducationScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderEducationGroupByArgsSchema;
