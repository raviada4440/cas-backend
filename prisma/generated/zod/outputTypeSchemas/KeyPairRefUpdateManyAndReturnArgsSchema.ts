import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KeyPairRefUpdateManyMutationInputSchema } from '../inputTypeSchemas/KeyPairRefUpdateManyMutationInputSchema'
import { KeyPairRefUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KeyPairRefUncheckedUpdateManyInputSchema'
import { KeyPairRefWhereInputSchema } from '../inputTypeSchemas/KeyPairRefWhereInputSchema'

export const KeyPairRefUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.KeyPairRefUpdateManyAndReturnArgs> = z.object({
  data: z.union([ KeyPairRefUpdateManyMutationInputSchema, KeyPairRefUncheckedUpdateManyInputSchema ]),
  where: KeyPairRefWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default KeyPairRefUpdateManyAndReturnArgsSchema;
