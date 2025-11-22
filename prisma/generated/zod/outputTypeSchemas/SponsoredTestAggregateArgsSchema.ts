import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestWhereInputSchema } from '../inputTypeSchemas/SponsoredTestWhereInputSchema'
import { SponsoredTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/SponsoredTestOrderByWithRelationInputSchema'
import { SponsoredTestWhereUniqueInputSchema } from '../inputTypeSchemas/SponsoredTestWhereUniqueInputSchema'

export const SponsoredTestAggregateArgsSchema: z.ZodType<Prisma.SponsoredTestAggregateArgs> = z.object({
  where: SponsoredTestWhereInputSchema.optional(), 
  orderBy: z.union([ SponsoredTestOrderByWithRelationInputSchema.array(), SponsoredTestOrderByWithRelationInputSchema ]).optional(),
  cursor: SponsoredTestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SponsoredTestAggregateArgsSchema;
