import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityCreateManyInputSchema } from '../inputTypeSchemas/UserIdentityCreateManyInputSchema'

export const UserIdentityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserIdentityCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserIdentityCreateManyInputSchema, UserIdentityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default UserIdentityCreateManyAndReturnArgsSchema;
