import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierWhereInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereInputSchema'
import { ExternalIdentifierOrderByWithRelationInputSchema } from '../inputTypeSchemas/ExternalIdentifierOrderByWithRelationInputSchema'
import { ExternalIdentifierWhereUniqueInputSchema } from '../inputTypeSchemas/ExternalIdentifierWhereUniqueInputSchema'

export const ExternalIdentifierAggregateArgsSchema: z.ZodType<Prisma.ExternalIdentifierAggregateArgs> = z.object({
  where: ExternalIdentifierWhereInputSchema.optional(), 
  orderBy: z.union([ ExternalIdentifierOrderByWithRelationInputSchema.array(), ExternalIdentifierOrderByWithRelationInputSchema ]).optional(),
  cursor: ExternalIdentifierWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ExternalIdentifierAggregateArgsSchema;
