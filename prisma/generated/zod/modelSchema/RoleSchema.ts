import { z } from 'zod';
import { UserRoleWithRelationsSchema, UserRolePartialWithRelationsSchema } from './UserRoleSchema'
import type { UserRoleWithRelations, UserRolePartialWithRelations } from './UserRoleSchema'

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  permissions: z.string().array(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// ROLE PARTIAL SCHEMA
/////////////////////////////////////////

export const RolePartialSchema = RoleSchema.partial()

export type RolePartial = z.infer<typeof RolePartialSchema>

/////////////////////////////////////////
// ROLE RELATION SCHEMA
/////////////////////////////////////////

export type RoleRelations = {
  userRoles: UserRoleWithRelations[];
};

export type RoleWithRelations = z.infer<typeof RoleSchema> & RoleRelations

export const RoleWithRelationsSchema: z.ZodType<RoleWithRelations> = RoleSchema.merge(z.object({
  userRoles: z.lazy(() => UserRoleWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ROLE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RolePartialRelations = {
  userRoles?: UserRolePartialWithRelations[];
};

export type RolePartialWithRelations = z.infer<typeof RolePartialSchema> & RolePartialRelations

export const RolePartialWithRelationsSchema: z.ZodType<RolePartialWithRelations> = RolePartialSchema.merge(z.object({
  userRoles: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
})).partial()

export type RoleWithPartialRelations = z.infer<typeof RoleSchema> & RolePartialRelations

export const RoleWithPartialRelationsSchema: z.ZodType<RoleWithPartialRelations> = RoleSchema.merge(z.object({
  userRoles: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
}).partial())

export default RoleSchema;
