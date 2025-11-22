import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityWhereInputSchema } from '../inputTypeSchemas/UserIdentityWhereInputSchema'

export const UserIdentityDeleteManyArgsSchema: z.ZodType<Prisma.UserIdentityDeleteManyArgs> = z.object({
  where: UserIdentityWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default UserIdentityDeleteManyArgsSchema;
