import { z } from 'zod';
import { UserAttributeUserTypeSchema } from '../inputTypeSchemas/UserAttributeUserTypeSchema'
import { UserWithRelationsSchema, UserPartialWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserPartialWithRelations } from './UserSchema'
import { AdminWithRelationsSchema, AdminPartialWithRelationsSchema } from './AdminSchema'
import type { AdminWithRelations, AdminPartialWithRelations } from './AdminSchema'
import { ProviderWithRelationsSchema, ProviderPartialWithRelationsSchema } from './ProviderSchema'
import type { ProviderWithRelations, ProviderPartialWithRelations } from './ProviderSchema'

/////////////////////////////////////////
// USER ATTRIBUTE SCHEMA
/////////////////////////////////////////

export const UserAttributeSchema = z.object({
  userType: UserAttributeUserTypeSchema.nullable(),
  id: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type UserAttribute = z.infer<typeof UserAttributeSchema>

/////////////////////////////////////////
// USER ATTRIBUTE PARTIAL SCHEMA
/////////////////////////////////////////

export const UserAttributePartialSchema = UserAttributeSchema.partial()

export type UserAttributePartial = z.infer<typeof UserAttributePartialSchema>

/////////////////////////////////////////
// USER ATTRIBUTE RELATION SCHEMA
/////////////////////////////////////////

export type UserAttributeRelations = {
  user: UserWithRelations;
  admin?: AdminWithRelations | null;
  provider?: ProviderWithRelations | null;
};

export type UserAttributeWithRelations = z.infer<typeof UserAttributeSchema> & UserAttributeRelations

export const UserAttributeWithRelationsSchema: z.ZodType<UserAttributeWithRelations> = UserAttributeSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  admin: z.lazy(() => AdminWithRelationsSchema).nullable(),
  provider: z.lazy(() => ProviderWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// USER ATTRIBUTE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserAttributePartialRelations = {
  user?: UserPartialWithRelations;
  admin?: AdminPartialWithRelations | null;
  provider?: ProviderPartialWithRelations | null;
};

export type UserAttributePartialWithRelations = z.infer<typeof UserAttributePartialSchema> & UserAttributePartialRelations

export const UserAttributePartialWithRelationsSchema: z.ZodType<UserAttributePartialWithRelations> = UserAttributePartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  admin: z.lazy(() => AdminPartialWithRelationsSchema).nullable(),
  provider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
})).partial()

export type UserAttributeWithPartialRelations = z.infer<typeof UserAttributeSchema> & UserAttributePartialRelations

export const UserAttributeWithPartialRelationsSchema: z.ZodType<UserAttributeWithPartialRelations> = UserAttributeSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
  admin: z.lazy(() => AdminPartialWithRelationsSchema).nullable(),
  provider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
}).partial())

export default UserAttributeSchema;
