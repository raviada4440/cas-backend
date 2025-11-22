import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeWhereInputSchema } from '../inputTypeSchemas/UserAttributeWhereInputSchema'
import { UserAttributeOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserAttributeOrderByWithRelationInputSchema'
import { UserAttributeWhereUniqueInputSchema } from '../inputTypeSchemas/UserAttributeWhereUniqueInputSchema'

export const UserAttributeAggregateArgsSchema: z.ZodType<Prisma.UserAttributeAggregateArgs> = z.object({
  where: UserAttributeWhereInputSchema.optional(), 
  orderBy: z.union([ UserAttributeOrderByWithRelationInputSchema.array(), UserAttributeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAttributeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default UserAttributeAggregateArgsSchema;
