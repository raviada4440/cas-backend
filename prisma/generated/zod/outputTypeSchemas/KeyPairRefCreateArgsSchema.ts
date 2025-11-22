import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefCreateInputSchema } from '../inputTypeSchemas/KeyPairRefCreateInputSchema'
import { KeyPairRefUncheckedCreateInputSchema } from '../inputTypeSchemas/KeyPairRefUncheckedCreateInputSchema'
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

export const KeyPairRefCreateArgsSchema: z.ZodType<Prisma.KeyPairRefCreateArgs> = z.object({
  select: KeyPairRefSelectSchema.optional(),
  data: z.union([ KeyPairRefCreateInputSchema, KeyPairRefUncheckedCreateInputSchema ]),
}).strict();

export default KeyPairRefCreateArgsSchema;
