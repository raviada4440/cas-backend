import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const KeyPairRefSelectSchema: z.ZodType<Prisma.KeyPairRefSelect> = z.object({
  id: z.boolean().optional(),
  kid: z.boolean().optional(),
  alg: z.boolean().optional(),
  provider: z.boolean().optional(),
  locator: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default KeyPairRefSelectSchema;
