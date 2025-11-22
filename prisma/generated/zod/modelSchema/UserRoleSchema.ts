import { z } from 'zod';
import { UserWithRelationsSchema, UserPartialWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserPartialWithRelations } from './UserSchema'
import { RoleWithRelationsSchema, RolePartialWithRelationsSchema } from './RoleSchema'
import type { RoleWithRelations, RolePartialWithRelations } from './RoleSchema'

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.string(),
  userId: z.string(),
  roleId: z.string(),
  assignedBy: z.string().nullable(),
  assignedAt: z.date(),
  expiresAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

/////////////////////////////////////////
// USER ROLE PARTIAL SCHEMA
/////////////////////////////////////////

export const UserRolePartialSchema = UserRoleSchema.partial()

export type UserRolePartial = z.infer<typeof UserRolePartialSchema>

/////////////////////////////////////////
// USER ROLE RELATION SCHEMA
/////////////////////////////////////////

export type UserRoleRelations = {
  user: UserWithRelations;
  role: RoleWithRelations;
};

export type UserRoleWithRelations = z.infer<typeof UserRoleSchema> & UserRoleRelations

export const UserRoleWithRelationsSchema: z.ZodType<UserRoleWithRelations> = UserRoleSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  role: z.lazy(() => RoleWithRelationsSchema),
}))

/////////////////////////////////////////
// USER ROLE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserRolePartialRelations = {
  user?: UserPartialWithRelations;
  role?: RolePartialWithRelations;
};

export type UserRolePartialWithRelations = z.infer<typeof UserRolePartialSchema> & UserRolePartialRelations

export const UserRolePartialWithRelationsSchema: z.ZodType<UserRolePartialWithRelations> = UserRolePartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  role: z.lazy(() => RolePartialWithRelationsSchema),
})).partial()

export type UserRoleWithPartialRelations = z.infer<typeof UserRoleSchema> & UserRolePartialRelations

export const UserRoleWithPartialRelationsSchema: z.ZodType<UserRoleWithPartialRelations> = UserRoleSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  role: z.lazy(() => RolePartialWithRelationsSchema),
}).partial())

export default UserRoleSchema;
