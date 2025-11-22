import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorWhereInputSchema } from '../inputTypeSchemas/SponsorWhereInputSchema'
import { SponsorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SponsorOrderByWithAggregationInputSchema'
import { SponsorScalarFieldEnumSchema } from '../inputTypeSchemas/SponsorScalarFieldEnumSchema'
import { SponsorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SponsorScalarWhereWithAggregatesInputSchema'

export const SponsorGroupByArgsSchema: z.ZodType<Prisma.SponsorGroupByArgs> = z.object({
  where: SponsorWhereInputSchema.optional(), 
  orderBy: z.union([ SponsorOrderByWithAggregationInputSchema.array(), SponsorOrderByWithAggregationInputSchema ]).optional(),
  by: SponsorScalarFieldEnumSchema.array(), 
  having: SponsorScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SponsorGroupByArgsSchema;
