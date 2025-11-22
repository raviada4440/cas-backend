import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefWhereUniqueInputSchema } from '../inputTypeSchemas/KeyPairRefWhereUniqueInputSchema'
import { KeyPairRefCreateInputSchema } from '../inputTypeSchemas/KeyPairRefCreateInputSchema'
import { KeyPairRefUncheckedCreateInputSchema } from '../inputTypeSchemas/KeyPairRefUncheckedCreateInputSchema'
import { KeyPairRefUpdateInputSchema } from '../inputTypeSchemas/KeyPairRefUpdateInputSchema'
import { KeyPairRefUncheckedUpdateInputSchema } from '../inputTypeSchemas/KeyPairRefUncheckedUpdateInputSchema'
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

export const KeyPairRefUpsertArgsSchema: z.ZodType<Prisma.KeyPairRefUpsertArgs> = z.object({
  select: KeyPairRefSelectSchema.optional(),
  where: KeyPairRefWhereUniqueInputSchema, 
  create: z.union([ KeyPairRefCreateInputSchema, KeyPairRefUncheckedCreateInputSchema ]),
  update: z.union([ KeyPairRefUpdateInputSchema, KeyPairRefUncheckedUpdateInputSchema ]),
}).strict();

export default KeyPairRefUpsertArgsSchema;
