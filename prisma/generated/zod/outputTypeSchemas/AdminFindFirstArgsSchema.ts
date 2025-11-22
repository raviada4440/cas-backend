import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AdminIncludeSchema } from '../inputTypeSchemas/AdminIncludeSchema'
import { AdminWhereInputSchema } from '../inputTypeSchemas/AdminWhereInputSchema'
import { AdminOrderByWithRelationInputSchema } from '../inputTypeSchemas/AdminOrderByWithRelationInputSchema'
import { AdminWhereUniqueInputSchema } from '../inputTypeSchemas/AdminWhereUniqueInputSchema'
import { AdminScalarFieldEnumSchema } from '../inputTypeSchemas/AdminScalarFieldEnumSchema'
import { UserAttributeArgsSchema } from "../outputTypeSchemas/UserAttributeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AdminSelectSchema: z.ZodType<Prisma.AdminSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  userAttributeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userAttribute: z.union([z.boolean(),z.lazy(() => UserAttributeArgsSchema)]).optional(),
}).strict()

export const AdminFindFirstArgsSchema: z.ZodType<Prisma.AdminFindFirstArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: z.lazy(() => AdminIncludeSchema).optional(),
  where: AdminWhereInputSchema.optional(), 
  orderBy: z.union([ AdminOrderByWithRelationInputSchema.array(), AdminOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdminScalarFieldEnumSchema, AdminScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default AdminFindFirstArgsSchema;
