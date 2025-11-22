import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramWhereInputSchema } from '../inputTypeSchemas/SponsoredProgramWhereInputSchema'
import { SponsoredProgramOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SponsoredProgramOrderByWithAggregationInputSchema'
import { SponsoredProgramScalarFieldEnumSchema } from '../inputTypeSchemas/SponsoredProgramScalarFieldEnumSchema'
import { SponsoredProgramScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SponsoredProgramScalarWhereWithAggregatesInputSchema'

export const SponsoredProgramGroupByArgsSchema: z.ZodType<Prisma.SponsoredProgramGroupByArgs> = z.object({
  where: SponsoredProgramWhereInputSchema.optional(), 
  orderBy: z.union([ SponsoredProgramOrderByWithAggregationInputSchema.array(), SponsoredProgramOrderByWithAggregationInputSchema ]).optional(),
  by: SponsoredProgramScalarFieldEnumSchema.array(), 
  having: SponsoredProgramScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SponsoredProgramGroupByArgsSchema;
