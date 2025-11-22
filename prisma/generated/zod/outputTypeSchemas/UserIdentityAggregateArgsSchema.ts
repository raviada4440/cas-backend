import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityWhereInputSchema } from '../inputTypeSchemas/UserIdentityWhereInputSchema'
import { UserIdentityOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserIdentityOrderByWithRelationInputSchema'
import { UserIdentityWhereUniqueInputSchema } from '../inputTypeSchemas/UserIdentityWhereUniqueInputSchema'

export const UserIdentityAggregateArgsSchema: z.ZodType<Prisma.UserIdentityAggregateArgs> = z.object({
  where: UserIdentityWhereInputSchema.optional(), 
  orderBy: z.union([ UserIdentityOrderByWithRelationInputSchema.array(), UserIdentityOrderByWithRelationInputSchema ]).optional(),
  cursor: UserIdentityWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default UserIdentityAggregateArgsSchema;
