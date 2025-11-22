import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefWhereInputSchema } from '../inputTypeSchemas/KeyPairRefWhereInputSchema'
import { KeyPairRefOrderByWithAggregationInputSchema } from '../inputTypeSchemas/KeyPairRefOrderByWithAggregationInputSchema'
import { KeyPairRefScalarFieldEnumSchema } from '../inputTypeSchemas/KeyPairRefScalarFieldEnumSchema'
import { KeyPairRefScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/KeyPairRefScalarWhereWithAggregatesInputSchema'

export const KeyPairRefGroupByArgsSchema: z.ZodType<Prisma.KeyPairRefGroupByArgs> = z.object({
  where: KeyPairRefWhereInputSchema.optional(), 
  orderBy: z.union([ KeyPairRefOrderByWithAggregationInputSchema.array(), KeyPairRefOrderByWithAggregationInputSchema ]).optional(),
  by: KeyPairRefScalarFieldEnumSchema.array(), 
  having: KeyPairRefScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default KeyPairRefGroupByArgsSchema;
