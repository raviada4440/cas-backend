import { z } from 'zod';
import { UserWithRelationsSchema, UserPartialWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserPartialWithRelations } from './UserSchema'
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'

/////////////////////////////////////////
// USER IDENTITY SCHEMA
/////////////////////////////////////////

export const UserIdentitySchema = z.object({
  id: z.string(),
  userId: z.string(),
  provider: z.string(),
  issuer: z.string(),
  subject: z.string(),
  fhirUser: z.string().nullable(),
  orgId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type UserIdentity = z.infer<typeof UserIdentitySchema>

/////////////////////////////////////////
// USER IDENTITY PARTIAL SCHEMA
/////////////////////////////////////////

export const UserIdentityPartialSchema = UserIdentitySchema.partial()

export type UserIdentityPartial = z.infer<typeof UserIdentityPartialSchema>

/////////////////////////////////////////
// USER IDENTITY RELATION SCHEMA
/////////////////////////////////////////

export type UserIdentityRelations = {
  user: UserWithRelations;
  organization?: OrganizationWithRelations | null;
};

export type UserIdentityWithRelations = z.infer<typeof UserIdentitySchema> & UserIdentityRelations

export const UserIdentityWithRelationsSchema: z.ZodType<UserIdentityWithRelations> = UserIdentitySchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  organization: z.lazy(() => OrganizationWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// USER IDENTITY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserIdentityPartialRelations = {
  user?: UserPartialWithRelations;
  organization?: OrganizationPartialWithRelations | null;
};

export type UserIdentityPartialWithRelations = z.infer<typeof UserIdentityPartialSchema> & UserIdentityPartialRelations

export const UserIdentityPartialWithRelationsSchema: z.ZodType<UserIdentityPartialWithRelations> = UserIdentityPartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
})).partial()

export type UserIdentityWithPartialRelations = z.infer<typeof UserIdentitySchema> & UserIdentityPartialRelations

export const UserIdentityWithPartialRelationsSchema: z.ZodType<UserIdentityWithPartialRelations> = UserIdentitySchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
}).partial())

export default UserIdentitySchema;
