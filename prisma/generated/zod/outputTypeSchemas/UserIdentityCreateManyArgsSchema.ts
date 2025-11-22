import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityCreateManyInputSchema } from '../inputTypeSchemas/UserIdentityCreateManyInputSchema'

export const UserIdentityCreateManyArgsSchema: z.ZodType<Prisma.UserIdentityCreateManyArgs> = z.object({
  data: z.union([ UserIdentityCreateManyInputSchema, UserIdentityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default UserIdentityCreateManyArgsSchema;
