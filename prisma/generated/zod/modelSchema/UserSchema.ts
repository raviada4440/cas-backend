import { z } from 'zod';
import { AccountWithRelationsSchema, AccountPartialWithRelationsSchema } from './AccountSchema'
import type { AccountWithRelations, AccountPartialWithRelations } from './AccountSchema'
import { SessionWithRelationsSchema, SessionPartialWithRelationsSchema } from './SessionSchema'
import type { SessionWithRelations, SessionPartialWithRelations } from './SessionSchema'
import { UserAttributeWithRelationsSchema, UserAttributePartialWithRelationsSchema } from './UserAttributeSchema'
import type { UserAttributeWithRelations, UserAttributePartialWithRelations } from './UserAttributeSchema'
import { UserIdentityWithRelationsSchema, UserIdentityPartialWithRelationsSchema } from './UserIdentitySchema'
import type { UserIdentityWithRelations, UserIdentityPartialWithRelations } from './UserIdentitySchema'
import { UserRoleWithRelationsSchema, UserRolePartialWithRelationsSchema } from './UserRoleSchema'
import type { UserRoleWithRelations, UserRolePartialWithRelations } from './UserRoleSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  password: z.string().nullable(),
  emailVerified: z.date().nullable(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  accounts: AccountWithRelations[];
  sessions: SessionWithRelations[];
  userAttribute?: UserAttributeWithRelations | null;
  userIdentities: UserIdentityWithRelations[];
  userRoles: UserRoleWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  accounts: z.lazy(() => AccountWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionWithRelationsSchema).array(),
  userAttribute: z.lazy(() => UserAttributeWithRelationsSchema).nullable(),
  userIdentities: z.lazy(() => UserIdentityWithRelationsSchema).array(),
  userRoles: z.lazy(() => UserRoleWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
  accounts?: AccountPartialWithRelations[];
  sessions?: SessionPartialWithRelations[];
  userAttribute?: UserAttributePartialWithRelations | null;
  userIdentities?: UserIdentityPartialWithRelations[];
  userRoles?: UserRolePartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  accounts: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionPartialWithRelationsSchema).array(),
  userAttribute: z.lazy(() => UserAttributePartialWithRelationsSchema).nullable(),
  userIdentities: z.lazy(() => UserIdentityPartialWithRelationsSchema).array(),
  userRoles: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
})).partial()

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  accounts: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionPartialWithRelationsSchema).array(),
  userAttribute: z.lazy(() => UserAttributePartialWithRelationsSchema).nullable(),
  userIdentities: z.lazy(() => UserIdentityPartialWithRelationsSchema).array(),
  userRoles: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
}).partial())

export default UserSchema;
