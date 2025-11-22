import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramWhereInputSchema } from '../inputTypeSchemas/SponsoredProgramWhereInputSchema'
import { SponsoredProgramOrderByWithRelationInputSchema } from '../inputTypeSchemas/SponsoredProgramOrderByWithRelationInputSchema'
import { SponsoredProgramWhereUniqueInputSchema } from '../inputTypeSchemas/SponsoredProgramWhereUniqueInputSchema'

export const SponsoredProgramAggregateArgsSchema: z.ZodType<Prisma.SponsoredProgramAggregateArgs> = z.object({
  where: SponsoredProgramWhereInputSchema.optional(), 
  orderBy: z.union([ SponsoredProgramOrderByWithRelationInputSchema.array(), SponsoredProgramOrderByWithRelationInputSchema ]).optional(),
  cursor: SponsoredProgramWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SponsoredProgramAggregateArgsSchema;
