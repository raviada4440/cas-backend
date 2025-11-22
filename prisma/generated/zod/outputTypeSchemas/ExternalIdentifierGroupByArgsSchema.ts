import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierWhereInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereInputSchema'
import { ExternalIdentifierOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ExternalIdentifierOrderByWithAggregationInputSchema'
import { ExternalIdentifierScalarFieldEnumSchema } from '../inputTypeSchemas/ExternalIdentifierScalarFieldEnumSchema'
import { ExternalIdentifierScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ExternalIdentifierScalarWhereWithAggregatesInputSchema'

export const ExternalIdentifierGroupByArgsSchema: z.ZodType<Prisma.ExternalIdentifierGroupByArgs> = z.object({
  where: ExternalIdentifierWhereInputSchema.optional(), 
  orderBy: z.union([ ExternalIdentifierOrderByWithAggregationInputSchema.array(), ExternalIdentifierOrderByWithAggregationInputSchema ]).optional(),
  by: ExternalIdentifierScalarFieldEnumSchema.array(), 
  having: ExternalIdentifierScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ExternalIdentifierGroupByArgsSchema;
