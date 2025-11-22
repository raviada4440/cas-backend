import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { OrganizationFavoriteTestWithRelationsSchema, OrganizationFavoriteTestPartialWithRelationsSchema } from './OrganizationFavoriteTestSchema'
import type { OrganizationFavoriteTestWithRelations, OrganizationFavoriteTestPartialWithRelations } from './OrganizationFavoriteTestSchema'
import { PatientOrganizationWithRelationsSchema, PatientOrganizationPartialWithRelationsSchema } from './PatientOrganizationSchema'
import type { PatientOrganizationWithRelations, PatientOrganizationPartialWithRelations } from './PatientOrganizationSchema'
import { ProviderOrganizationWithRelationsSchema, ProviderOrganizationPartialWithRelationsSchema } from './ProviderOrganizationSchema'
import type { ProviderOrganizationWithRelations, ProviderOrganizationPartialWithRelations } from './ProviderOrganizationSchema'
import { OrganizationEndpointWithRelationsSchema, OrganizationEndpointPartialWithRelationsSchema } from './OrganizationEndpointSchema'
import type { OrganizationEndpointWithRelations, OrganizationEndpointPartialWithRelations } from './OrganizationEndpointSchema'
import { UserIdentityWithRelationsSchema, UserIdentityPartialWithRelationsSchema } from './UserIdentitySchema'
import type { UserIdentityWithRelations, UserIdentityPartialWithRelations } from './UserIdentitySchema'
import { OrderFormSectionWithRelationsSchema, OrderFormSectionPartialWithRelationsSchema } from './OrderFormSectionSchema'
import type { OrderFormSectionWithRelations, OrderFormSectionPartialWithRelations } from './OrderFormSectionSchema'
import { OrderFormTemplateWithRelationsSchema, OrderFormTemplatePartialWithRelationsSchema } from './OrderFormTemplateSchema'
import type { OrderFormTemplateWithRelations, OrderFormTemplatePartialWithRelations } from './OrderFormTemplateSchema'

/////////////////////////////////////////
// ORGANIZATION SCHEMA
/////////////////////////////////////////

export const OrganizationSchema = z.object({
  id: z.string(),
  href: z.string().nullable(),
  parentId: z.string().nullable(),
  level: z.number().nullable(),
  parentOrgName: z.string().nullable(),
  orgName: z.string().nullable(),
  orgType: z.string().nullable(),
  orgSpecialty: z.string().nullable(),
  orgAddress: z.string().nullable(),
  orgCity: z.string().nullable(),
  orgState: z.string().nullable(),
  orgZip: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Organization = z.infer<typeof OrganizationSchema>

/////////////////////////////////////////
// ORGANIZATION PARTIAL SCHEMA
/////////////////////////////////////////

export const OrganizationPartialSchema = OrganizationSchema.partial()

export type OrganizationPartial = z.infer<typeof OrganizationPartialSchema>

/////////////////////////////////////////
// ORGANIZATION RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationRelations = {
  labOrders: LabOrderWithRelations[];
  organizationFavoriteTests: OrganizationFavoriteTestWithRelations[];
  patientOrganizations: PatientOrganizationWithRelations[];
  providerOrganizations: ProviderOrganizationWithRelations[];
  organizationEndpoints: OrganizationEndpointWithRelations[];
  userIdentities: UserIdentityWithRelations[];
  orderFormSections: OrderFormSectionWithRelations[];
  orderFormTemplates: OrderFormTemplateWithRelations[];
};

export type OrganizationWithRelations = z.infer<typeof OrganizationSchema> & OrganizationRelations

export const OrganizationWithRelationsSchema: z.ZodType<OrganizationWithRelations> = OrganizationSchema.merge(z.object({
  labOrders: z.lazy(() => LabOrderWithRelationsSchema).array(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestWithRelationsSchema).array(),
  patientOrganizations: z.lazy(() => PatientOrganizationWithRelationsSchema).array(),
  providerOrganizations: z.lazy(() => ProviderOrganizationWithRelationsSchema).array(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointWithRelationsSchema).array(),
  userIdentities: z.lazy(() => UserIdentityWithRelationsSchema).array(),
  orderFormSections: z.lazy(() => OrderFormSectionWithRelationsSchema).array(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ORGANIZATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationPartialRelations = {
  labOrders?: LabOrderPartialWithRelations[];
  organizationFavoriteTests?: OrganizationFavoriteTestPartialWithRelations[];
  patientOrganizations?: PatientOrganizationPartialWithRelations[];
  providerOrganizations?: ProviderOrganizationPartialWithRelations[];
  organizationEndpoints?: OrganizationEndpointPartialWithRelations[];
  userIdentities?: UserIdentityPartialWithRelations[];
  orderFormSections?: OrderFormSectionPartialWithRelations[];
  orderFormTemplates?: OrderFormTemplatePartialWithRelations[];
};

export type OrganizationPartialWithRelations = z.infer<typeof OrganizationPartialSchema> & OrganizationPartialRelations

export const OrganizationPartialWithRelationsSchema: z.ZodType<OrganizationPartialWithRelations> = OrganizationPartialSchema.merge(z.object({
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestPartialWithRelationsSchema).array(),
  patientOrganizations: z.lazy(() => PatientOrganizationPartialWithRelationsSchema).array(),
  providerOrganizations: z.lazy(() => ProviderOrganizationPartialWithRelationsSchema).array(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointPartialWithRelationsSchema).array(),
  userIdentities: z.lazy(() => UserIdentityPartialWithRelationsSchema).array(),
  orderFormSections: z.lazy(() => OrderFormSectionPartialWithRelationsSchema).array(),
  orderFormTemplates: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema).array(),
})).partial()

export type OrganizationWithPartialRelations = z.infer<typeof OrganizationSchema> & OrganizationPartialRelations

export const OrganizationWithPartialRelationsSchema: z.ZodType<OrganizationWithPartialRelations> = OrganizationSchema.merge(z.object({
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestPartialWithRelationsSchema).array(),
  patientOrganizations: z.lazy(() => PatientOrganizationPartialWithRelationsSchema).array(),
  providerOrganizations: z.lazy(() => ProviderOrganizationPartialWithRelationsSchema).array(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointPartialWithRelationsSchema).array(),
  userIdentities: z.lazy(() => UserIdentityPartialWithRelationsSchema).array(),
  orderFormSections: z.lazy(() => OrderFormSectionPartialWithRelationsSchema).array(),
  orderFormTemplates: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema).array(),
}).partial())

export default OrganizationSchema;
