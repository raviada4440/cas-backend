import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeWhereInputSchema } from '../inputTypeSchemas/UserAttributeWhereInputSchema'
import { UserAttributeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserAttributeOrderByWithAggregationInputSchema'
import { UserAttributeScalarFieldEnumSchema } from '../inputTypeSchemas/UserAttributeScalarFieldEnumSchema'
import { UserAttributeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserAttributeScalarWhereWithAggregatesInputSchema'

export const UserAttributeGroupByArgsSchema: z.ZodType<Prisma.UserAttributeGroupByArgs> = z.object({
  where: UserAttributeWhereInputSchema.optional(), 
  orderBy: z.union([ UserAttributeOrderByWithAggregationInputSchema.array(), UserAttributeOrderByWithAggregationInputSchema ]).optional(),
  by: UserAttributeScalarFieldEnumSchema.array(), 
  having: UserAttributeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default UserAttributeGroupByArgsSchema;
