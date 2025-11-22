import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestWhereInputSchema } from '../inputTypeSchemas/SponsoredTestWhereInputSchema'
import { SponsoredTestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SponsoredTestOrderByWithAggregationInputSchema'
import { SponsoredTestScalarFieldEnumSchema } from '../inputTypeSchemas/SponsoredTestScalarFieldEnumSchema'
import { SponsoredTestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SponsoredTestScalarWhereWithAggregatesInputSchema'

export const SponsoredTestGroupByArgsSchema: z.ZodType<Prisma.SponsoredTestGroupByArgs> = z.object({
  where: SponsoredTestWhereInputSchema.optional(), 
  orderBy: z.union([ SponsoredTestOrderByWithAggregationInputSchema.array(), SponsoredTestOrderByWithAggregationInputSchema ]).optional(),
  by: SponsoredTestScalarFieldEnumSchema.array(), 
  having: SponsoredTestScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SponsoredTestGroupByArgsSchema;
