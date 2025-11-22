import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { UserAttributeWithRelationsSchema, UserAttributePartialWithRelationsSchema } from './UserAttributeSchema'
import type { UserAttributeWithRelations, UserAttributePartialWithRelations } from './UserAttributeSchema'
import { ProviderEducationWithRelationsSchema, ProviderEducationPartialWithRelationsSchema } from './ProviderEducationSchema'
import type { ProviderEducationWithRelations, ProviderEducationPartialWithRelations } from './ProviderEducationSchema'
import { ProviderFavoriteTestWithRelationsSchema, ProviderFavoriteTestPartialWithRelationsSchema } from './ProviderFavoriteTestSchema'
import type { ProviderFavoriteTestWithRelations, ProviderFavoriteTestPartialWithRelations } from './ProviderFavoriteTestSchema'
import { ProviderOrganizationWithRelationsSchema, ProviderOrganizationPartialWithRelationsSchema } from './ProviderOrganizationSchema'
import type { ProviderOrganizationWithRelations, ProviderOrganizationPartialWithRelations } from './ProviderOrganizationSchema'

/////////////////////////////////////////
// PROVIDER SCHEMA
/////////////////////////////////////////

export const ProviderSchema = z.object({
  id: z.string(),
  href: z.string().nullable(),
  npi: z.string().nullable(),
  name: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string().nullable(),
  credentials: z.string().nullable(),
  specialty: z.string().nullable(),
  aboutme: z.string().nullable(),
  gender: z.string().nullable(),
  providerType: z.string().nullable(),
  affiliation: z.string().nullable(),
  proceduresAndResearch: z.string().nullable(),
  specialInterests: z.string().nullable(),
  userAttributeId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Provider = z.infer<typeof ProviderSchema>

/////////////////////////////////////////
// PROVIDER PARTIAL SCHEMA
/////////////////////////////////////////

export const ProviderPartialSchema = ProviderSchema.partial()

export type ProviderPartial = z.infer<typeof ProviderPartialSchema>

/////////////////////////////////////////
// PROVIDER RELATION SCHEMA
/////////////////////////////////////////

export type ProviderRelations = {
  orderingProviderLabOrders: LabOrderWithRelations[];
  treatingProviderLabOrders: LabOrderWithRelations[];
  userAttribute?: UserAttributeWithRelations | null;
  providerEducation: ProviderEducationWithRelations[];
  providerFavoriteTests: ProviderFavoriteTestWithRelations[];
  providerOrganizations: ProviderOrganizationWithRelations[];
};

export type ProviderWithRelations = z.infer<typeof ProviderSchema> & ProviderRelations

export const ProviderWithRelationsSchema: z.ZodType<ProviderWithRelations> = ProviderSchema.merge(z.object({
  orderingProviderLabOrders: z.lazy(() => LabOrderWithRelationsSchema).array(),
  treatingProviderLabOrders: z.lazy(() => LabOrderWithRelationsSchema).array(),
  userAttribute: z.lazy(() => UserAttributeWithRelationsSchema).nullable(),
  providerEducation: z.lazy(() => ProviderEducationWithRelationsSchema).array(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestWithRelationsSchema).array(),
  providerOrganizations: z.lazy(() => ProviderOrganizationWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PROVIDER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ProviderPartialRelations = {
  orderingProviderLabOrders?: LabOrderPartialWithRelations[];
  treatingProviderLabOrders?: LabOrderPartialWithRelations[];
  userAttribute?: UserAttributePartialWithRelations | null;
  providerEducation?: ProviderEducationPartialWithRelations[];
  providerFavoriteTests?: ProviderFavoriteTestPartialWithRelations[];
  providerOrganizations?: ProviderOrganizationPartialWithRelations[];
};

export type ProviderPartialWithRelations = z.infer<typeof ProviderPartialSchema> & ProviderPartialRelations

export const ProviderPartialWithRelationsSchema: z.ZodType<ProviderPartialWithRelations> = ProviderPartialSchema.merge(z.object({
  orderingProviderLabOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  treatingProviderLabOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  userAttribute: z.lazy(() => UserAttributePartialWithRelationsSchema).nullable(),
  providerEducation: z.lazy(() => ProviderEducationPartialWithRelationsSchema).array(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestPartialWithRelationsSchema).array(),
  providerOrganizations: z.lazy(() => ProviderOrganizationPartialWithRelationsSchema).array(),
})).partial()

export type ProviderWithPartialRelations = z.infer<typeof ProviderSchema> & ProviderPartialRelations

export const ProviderWithPartialRelationsSchema: z.ZodType<ProviderWithPartialRelations> = ProviderSchema.merge(z.object({
  orderingProviderLabOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  treatingProviderLabOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  userAttribute: z.lazy(() => UserAttributePartialWithRelationsSchema).nullable(),
  providerEducation: z.lazy(() => ProviderEducationPartialWithRelationsSchema).array(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestPartialWithRelationsSchema).array(),
  providerOrganizations: z.lazy(() => ProviderOrganizationPartialWithRelationsSchema).array(),
}).partial())

export default ProviderSchema;
