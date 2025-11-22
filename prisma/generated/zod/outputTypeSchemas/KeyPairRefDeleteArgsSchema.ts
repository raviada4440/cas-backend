import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const KeyPairRefDeleteArgsSchema: z.ZodType<Prisma.KeyPairRefDeleteArgs> = z.object({
  select: KeyPairRefSelectSchema.optional(),
  where: KeyPairRefWhereUniqueInputSchema, 
}).strict();

export default KeyPairRefDeleteArgsSchema;
