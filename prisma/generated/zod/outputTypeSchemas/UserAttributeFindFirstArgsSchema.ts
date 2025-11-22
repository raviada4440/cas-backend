import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeIncludeSchema } from '../inputTypeSchemas/UserAttributeIncludeSchema'
import { UserAttributeWhereInputSchema } from '../inputTypeSchemas/UserAttributeWhereInputSchema'
import { UserAttributeOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserAttributeOrderByWithRelationInputSchema'
import { UserAttributeWhereUniqueInputSchema } from '../inputTypeSchemas/UserAttributeWhereUniqueInputSchema'
import { UserAttributeScalarFieldEnumSchema } from '../inputTypeSchemas/UserAttributeScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AdminArgsSchema } from "../outputTypeSchemas/AdminArgsSchema"
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserAttributeSelectSchema: z.ZodType<Prisma.UserAttributeSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  userType: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  admin: z.union([z.boolean(),z.lazy(() => AdminArgsSchema)]).optional(),
  provider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
}).strict()

export const UserAttributeFindFirstArgsSchema: z.ZodType<Prisma.UserAttributeFindFirstArgs> = z.object({
  select: UserAttributeSelectSchema.optional(),
  include: z.lazy(() => UserAttributeIncludeSchema).optional(),
  where: UserAttributeWhereInputSchema.optional(), 
  orderBy: z.union([ UserAttributeOrderByWithRelationInputSchema.array(), UserAttributeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAttributeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserAttributeScalarFieldEnumSchema, UserAttributeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default UserAttributeFindFirstArgsSchema;
