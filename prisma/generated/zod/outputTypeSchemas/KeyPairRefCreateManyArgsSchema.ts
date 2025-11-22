import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefCreateManyInputSchema } from '../inputTypeSchemas/KeyPairRefCreateManyInputSchema'

export const KeyPairRefCreateManyArgsSchema: z.ZodType<Prisma.KeyPairRefCreateManyArgs> = z.object({
  data: z.union([ KeyPairRefCreateManyInputSchema, KeyPairRefCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default KeyPairRefCreateManyArgsSchema;
