import { z } from 'zod';
import { UserAttributeWithRelationsSchema, UserAttributePartialWithRelationsSchema } from './UserAttributeSchema'
import type { UserAttributeWithRelations, UserAttributePartialWithRelations } from './UserAttributeSchema'

/////////////////////////////////////////
// ADMIN SCHEMA
/////////////////////////////////////////

export const AdminSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  userAttributeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Admin = z.infer<typeof AdminSchema>

/////////////////////////////////////////
// ADMIN PARTIAL SCHEMA
/////////////////////////////////////////

export const AdminPartialSchema = AdminSchema.partial()

export type AdminPartial = z.infer<typeof AdminPartialSchema>

/////////////////////////////////////////
// ADMIN RELATION SCHEMA
/////////////////////////////////////////

export type AdminRelations = {
  userAttribute: UserAttributeWithRelations;
};

export type AdminWithRelations = z.infer<typeof AdminSchema> & AdminRelations

export const AdminWithRelationsSchema: z.ZodType<AdminWithRelations> = AdminSchema.merge(z.object({
  userAttribute: z.lazy(() => UserAttributeWithRelationsSchema),
}))

/////////////////////////////////////////
// ADMIN PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AdminPartialRelations = {
  userAttribute?: UserAttributePartialWithRelations;
};

export type AdminPartialWithRelations = z.infer<typeof AdminPartialSchema> & AdminPartialRelations

export const AdminPartialWithRelationsSchema: z.ZodType<AdminPartialWithRelations> = AdminPartialSchema.merge(z.object({
  userAttribute: z.lazy(() => UserAttributePartialWithRelationsSchema),
})).partial()

export type AdminWithPartialRelations = z.infer<typeof AdminSchema> & AdminPartialRelations

export const AdminWithPartialRelationsSchema: z.ZodType<AdminWithPartialRelations> = AdminSchema.merge(z.object({
  userAttribute: z.lazy(() => UserAttributePartialWithRelationsSchema),
}).partial())

export default AdminSchema;
