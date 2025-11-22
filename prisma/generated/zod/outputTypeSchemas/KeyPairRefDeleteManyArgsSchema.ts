import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefWhereInputSchema } from '../inputTypeSchemas/KeyPairRefWhereInputSchema'

export const KeyPairRefDeleteManyArgsSchema: z.ZodType<Prisma.KeyPairRefDeleteManyArgs> = z.object({
  where: KeyPairRefWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default KeyPairRefDeleteManyArgsSchema;
