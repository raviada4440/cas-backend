import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const KeyPairRefUncheckedCreateInputSchema: z.ZodType<Prisma.KeyPairRefUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  kid: z.string(),
  alg: z.string(),
  provider: z.string(),
  locator: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default KeyPairRefUncheckedCreateInputSchema;
