import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefUpdateInputSchema } from '../inputTypeSchemas/KeyPairRefUpdateInputSchema'
import { KeyPairRefUncheckedUpdateInputSchema } from '../inputTypeSchemas/KeyPairRefUncheckedUpdateInputSchema'
import { KeyPairRefWhereUniqueInputSchema } from '../inputTypeSchemas/KeyPairRefWhereUniqueInputSchema'
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

export const KeyPairRefUpdateArgsSchema: z.ZodType<Prisma.KeyPairRefUpdateArgs> = z.object({
  select: KeyPairRefSelectSchema.optional(),
  data: z.union([ KeyPairRefUpdateInputSchema, KeyPairRefUncheckedUpdateInputSchema ]),
  where: KeyPairRefWhereUniqueInputSchema, 
}).strict();

export default KeyPairRefUpdateArgsSchema;
