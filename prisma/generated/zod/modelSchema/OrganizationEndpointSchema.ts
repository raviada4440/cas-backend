import { z } from 'zod';
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'

/////////////////////////////////////////
// ORGANIZATION ENDPOINT SCHEMA
/////////////////////////////////////////

export const OrganizationEndpointSchema = z.object({
  id: z.string(),
  organizationId: z.string().nullable(),
  orgName: z.string().nullable(),
  ehrVendor: z.string().nullable(),
  fhirVersion: z.string().nullable(),
  endpoint: z.string().nullable(),
  issuer: z.string().nullable(),
  clientId: z.string().nullable(),
  clientSecret: z.string().nullable(),
  authorizationEndpoint: z.string().nullable(),
  tokenEndpoint: z.string().nullable(),
  isActive: z.boolean().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type OrganizationEndpoint = z.infer<typeof OrganizationEndpointSchema>

/////////////////////////////////////////
// ORGANIZATION ENDPOINT PARTIAL SCHEMA
/////////////////////////////////////////

export const OrganizationEndpointPartialSchema = OrganizationEndpointSchema.partial()

export type OrganizationEndpointPartial = z.infer<typeof OrganizationEndpointPartialSchema>

/////////////////////////////////////////
// ORGANIZATION ENDPOINT RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationEndpointRelations = {
  organization?: OrganizationWithRelations | null;
};

export type OrganizationEndpointWithRelations = z.infer<typeof OrganizationEndpointSchema> & OrganizationEndpointRelations

export const OrganizationEndpointWithRelationsSchema: z.ZodType<OrganizationEndpointWithRelations> = OrganizationEndpointSchema.merge(z.object({
  organization: z.lazy(() => OrganizationWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// ORGANIZATION ENDPOINT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationEndpointPartialRelations = {
  organization?: OrganizationPartialWithRelations | null;
};

export type OrganizationEndpointPartialWithRelations = z.infer<typeof OrganizationEndpointPartialSchema> & OrganizationEndpointPartialRelations

export const OrganizationEndpointPartialWithRelationsSchema: z.ZodType<OrganizationEndpointPartialWithRelations> = OrganizationEndpointPartialSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
})).partial()

export type OrganizationEndpointWithPartialRelations = z.infer<typeof OrganizationEndpointSchema> & OrganizationEndpointPartialRelations

export const OrganizationEndpointWithPartialRelationsSchema: z.ZodType<OrganizationEndpointWithPartialRelations> = OrganizationEndpointSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
}).partial())

export default OrganizationEndpointSchema;
