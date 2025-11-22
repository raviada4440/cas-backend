import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserIdentityUpdateManyMutationInputSchema'
import { UserIdentityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserIdentityUncheckedUpdateManyInputSchema'
import { UserIdentityWhereInputSchema } from '../inputTypeSchemas/UserIdentityWhereInputSchema'

export const UserIdentityUpdateManyArgsSchema: z.ZodType<Prisma.UserIdentityUpdateManyArgs> = z.object({
  data: z.union([ UserIdentityUpdateManyMutationInputSchema, UserIdentityUncheckedUpdateManyInputSchema ]),
  where: UserIdentityWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default UserIdentityUpdateManyArgsSchema;
