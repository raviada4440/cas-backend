import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerWhereInputSchema } from '../inputTypeSchemas/BiomarkerWhereInputSchema'
import { BiomarkerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BiomarkerOrderByWithAggregationInputSchema'
import { BiomarkerScalarFieldEnumSchema } from '../inputTypeSchemas/BiomarkerScalarFieldEnumSchema'
import { BiomarkerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BiomarkerScalarWhereWithAggregatesInputSchema'

export const BiomarkerGroupByArgsSchema: z.ZodType<Prisma.BiomarkerGroupByArgs> = z.object({
  where: BiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ BiomarkerOrderByWithAggregationInputSchema.array(), BiomarkerOrderByWithAggregationInputSchema ]).optional(),
  by: BiomarkerScalarFieldEnumSchema.array(), 
  having: BiomarkerScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default BiomarkerGroupByArgsSchema;
