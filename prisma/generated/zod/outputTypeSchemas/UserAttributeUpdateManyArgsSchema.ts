import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserAttributeUpdateManyMutationInputSchema'
import { UserAttributeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserAttributeUncheckedUpdateManyInputSchema'
import { UserAttributeWhereInputSchema } from '../inputTypeSchemas/UserAttributeWhereInputSchema'

export const UserAttributeUpdateManyArgsSchema: z.ZodType<Prisma.UserAttributeUpdateManyArgs> = z.object({
  data: z.union([ UserAttributeUpdateManyMutationInputSchema, UserAttributeUncheckedUpdateManyInputSchema ]),
  where: UserAttributeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default UserAttributeUpdateManyArgsSchema;
