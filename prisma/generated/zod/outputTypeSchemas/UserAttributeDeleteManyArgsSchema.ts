import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeWhereInputSchema } from '../inputTypeSchemas/UserAttributeWhereInputSchema'

export const UserAttributeDeleteManyArgsSchema: z.ZodType<Prisma.UserAttributeDeleteManyArgs> = z.object({
  where: UserAttributeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default UserAttributeDeleteManyArgsSchema;
