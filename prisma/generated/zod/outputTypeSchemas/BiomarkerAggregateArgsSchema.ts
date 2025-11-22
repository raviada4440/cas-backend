import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerWhereInputSchema } from '../inputTypeSchemas/BiomarkerWhereInputSchema'
import { BiomarkerOrderByWithRelationInputSchema } from '../inputTypeSchemas/BiomarkerOrderByWithRelationInputSchema'
import { BiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/BiomarkerWhereUniqueInputSchema'

export const BiomarkerAggregateArgsSchema: z.ZodType<Prisma.BiomarkerAggregateArgs> = z.object({
  where: BiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ BiomarkerOrderByWithRelationInputSchema.array(), BiomarkerOrderByWithRelationInputSchema ]).optional(),
  cursor: BiomarkerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default BiomarkerAggregateArgsSchema;
