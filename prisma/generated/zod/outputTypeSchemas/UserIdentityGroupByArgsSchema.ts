import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityWhereInputSchema } from '../inputTypeSchemas/UserIdentityWhereInputSchema'
import { UserIdentityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserIdentityOrderByWithAggregationInputSchema'
import { UserIdentityScalarFieldEnumSchema } from '../inputTypeSchemas/UserIdentityScalarFieldEnumSchema'
import { UserIdentityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserIdentityScalarWhereWithAggregatesInputSchema'

export const UserIdentityGroupByArgsSchema: z.ZodType<Prisma.UserIdentityGroupByArgs> = z.object({
  where: UserIdentityWhereInputSchema.optional(), 
  orderBy: z.union([ UserIdentityOrderByWithAggregationInputSchema.array(), UserIdentityOrderByWithAggregationInputSchema ]).optional(),
  by: UserIdentityScalarFieldEnumSchema.array(), 
  having: UserIdentityScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default UserIdentityGroupByArgsSchema;
