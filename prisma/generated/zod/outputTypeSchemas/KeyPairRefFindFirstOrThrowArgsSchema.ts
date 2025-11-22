import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefWhereInputSchema } from '../inputTypeSchemas/KeyPairRefWhereInputSchema'
import { KeyPairRefOrderByWithRelationInputSchema } from '../inputTypeSchemas/KeyPairRefOrderByWithRelationInputSchema'
import { KeyPairRefWhereUniqueInputSchema } from '../inputTypeSchemas/KeyPairRefWhereUniqueInputSchema'
import { KeyPairRefScalarFieldEnumSchema } from '../inputTypeSchemas/KeyPairRefScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KeyPairRefSelectSchema: z.ZodType<Prisma.KeyPairRefSelect> = z.object({
  id: z.boolean().optional(),
  kid: z.boolean().optional(),
  alg: z.boolean().optional(),
  provider: z.boolean().optional(),
  locator: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const KeyPairRefFindFirstOrThrowArgsSchema: z.ZodType<Prisma.KeyPairRefFindFirstOrThrowArgs> = z.object({
  select: KeyPairRefSelectSchema.optional(),
  where: KeyPairRefWhereInputSchema.optional(), 
  orderBy: z.union([ KeyPairRefOrderByWithRelationInputSchema.array(), KeyPairRefOrderByWithRelationInputSchema ]).optional(),
  cursor: KeyPairRefWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KeyPairRefScalarFieldEnumSchema, KeyPairRefScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default KeyPairRefFindFirstOrThrowArgsSchema;
