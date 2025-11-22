import { z } from 'zod';
import { UserWithRelationsSchema, UserPartialWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserPartialWithRelations } from './UserSchema'

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().nullable(),
  accessToken: z.string().nullable(),
  expiresAt: z.number().nullable(),
  tokenType: z.string().nullable(),
  scope: z.string().nullable(),
  state: z.string().nullable(),
  idToken: z.string().nullable(),
  sessionState: z.string().nullable(),
  refreshTokenExpiresIn: z.number().nullable(),
  epicDstu2Patient: z.string().nullable(),
  appointment: z.string().nullable(),
  dob: z.string().nullable(),
  encounter: z.string().nullable(),
  location: z.string().nullable(),
  loginDepartment: z.string().nullable(),
  needPatientBanner: z.string().nullable(),
  patient: z.string().nullable(),
  smartStyleUrl: z.string().nullable(),
  unconfirmedStatus: z.string().nullable(),
  userEmail: z.string().nullable(),
  username: z.string().nullable(),
  tenant: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// ACCOUNT PARTIAL SCHEMA
/////////////////////////////////////////

export const AccountPartialSchema = AccountSchema.partial()

export type AccountPartial = z.infer<typeof AccountPartialSchema>

/////////////////////////////////////////
// ACCOUNT RELATION SCHEMA
/////////////////////////////////////////

export type AccountRelations = {
  user: UserWithRelations;
};

export type AccountWithRelations = z.infer<typeof AccountSchema> & AccountRelations

export const AccountWithRelationsSchema: z.ZodType<AccountWithRelations> = AccountSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// ACCOUNT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AccountPartialRelations = {
  user?: UserPartialWithRelations;
};

export type AccountPartialWithRelations = z.infer<typeof AccountPartialSchema> & AccountPartialRelations

export const AccountPartialWithRelationsSchema: z.ZodType<AccountPartialWithRelations> = AccountPartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export type AccountWithPartialRelations = z.infer<typeof AccountSchema> & AccountPartialRelations

export const AccountWithPartialRelationsSchema: z.ZodType<AccountWithPartialRelations> = AccountSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

export default AccountSchema;
