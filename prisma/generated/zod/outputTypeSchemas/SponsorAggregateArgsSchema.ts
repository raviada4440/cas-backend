import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorWhereInputSchema } from '../inputTypeSchemas/SponsorWhereInputSchema'
import { SponsorOrderByWithRelationInputSchema } from '../inputTypeSchemas/SponsorOrderByWithRelationInputSchema'
import { SponsorWhereUniqueInputSchema } from '../inputTypeSchemas/SponsorWhereUniqueInputSchema'

export const SponsorAggregateArgsSchema: z.ZodType<Prisma.SponsorAggregateArgs> = z.object({
  where: SponsorWhereInputSchema.optional(), 
  orderBy: z.union([ SponsorOrderByWithRelationInputSchema.array(), SponsorOrderByWithRelationInputSchema ]).optional(),
  cursor: SponsorWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SponsorAggregateArgsSchema;
