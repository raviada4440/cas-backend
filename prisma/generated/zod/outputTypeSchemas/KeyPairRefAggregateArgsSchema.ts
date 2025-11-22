import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefWhereInputSchema } from '../inputTypeSchemas/KeyPairRefWhereInputSchema'
import { KeyPairRefOrderByWithRelationInputSchema } from '../inputTypeSchemas/KeyPairRefOrderByWithRelationInputSchema'
import { KeyPairRefWhereUniqueInputSchema } from '../inputTypeSchemas/KeyPairRefWhereUniqueInputSchema'

export const KeyPairRefAggregateArgsSchema: z.ZodType<Prisma.KeyPairRefAggregateArgs> = z.object({
  where: KeyPairRefWhereInputSchema.optional(), 
  orderBy: z.union([ KeyPairRefOrderByWithRelationInputSchema.array(), KeyPairRefOrderByWithRelationInputSchema ]).optional(),
  cursor: KeyPairRefWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default KeyPairRefAggregateArgsSchema;
