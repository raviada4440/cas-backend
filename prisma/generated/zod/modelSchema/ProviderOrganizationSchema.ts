import { z } from 'zod';
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'
import { ProviderWithRelationsSchema, ProviderPartialWithRelationsSchema } from './ProviderSchema'
import type { ProviderWithRelations, ProviderPartialWithRelations } from './ProviderSchema'

/////////////////////////////////////////
// PROVIDER ORGANIZATION SCHEMA
/////////////////////////////////////////

export const ProviderOrganizationSchema = z.object({
  id: z.string(),
  providerId: z.string(),
  organizationId: z.string(),
  providerNpi: z.string().nullable(),
  name: z.string().nullable(),
  parentOrgName: z.string().nullable(),
  orgName: z.string().nullable(),
  orgAddress: z.string().nullable(),
  orgCity: z.string().nullable(),
  orgState: z.string().nullable(),
  orgZip: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type ProviderOrganization = z.infer<typeof ProviderOrganizationSchema>

/////////////////////////////////////////
// PROVIDER ORGANIZATION PARTIAL SCHEMA
/////////////////////////////////////////

export const ProviderOrganizationPartialSchema = ProviderOrganizationSchema.partial()

export type ProviderOrganizationPartial = z.infer<typeof ProviderOrganizationPartialSchema>

/////////////////////////////////////////
// PROVIDER ORGANIZATION RELATION SCHEMA
/////////////////////////////////////////

export type ProviderOrganizationRelations = {
  organization: OrganizationWithRelations;
  provider: ProviderWithRelations;
};

export type ProviderOrganizationWithRelations = z.infer<typeof ProviderOrganizationSchema> & ProviderOrganizationRelations

export const ProviderOrganizationWithRelationsSchema: z.ZodType<ProviderOrganizationWithRelations> = ProviderOrganizationSchema.merge(z.object({
  organization: z.lazy(() => OrganizationWithRelationsSchema),
  provider: z.lazy(() => ProviderWithRelationsSchema),
}))

/////////////////////////////////////////
// PROVIDER ORGANIZATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ProviderOrganizationPartialRelations = {
  organization?: OrganizationPartialWithRelations;
  provider?: ProviderPartialWithRelations;
};

export type ProviderOrganizationPartialWithRelations = z.infer<typeof ProviderOrganizationPartialSchema> & ProviderOrganizationPartialRelations

export const ProviderOrganizationPartialWithRelationsSchema: z.ZodType<ProviderOrganizationPartialWithRelations> = ProviderOrganizationPartialSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema),
  provider: z.lazy(() => ProviderPartialWithRelationsSchema),
})).partial()

export type ProviderOrganizationWithPartialRelations = z.infer<typeof ProviderOrganizationSchema> & ProviderOrganizationPartialRelations

export const ProviderOrganizationWithPartialRelationsSchema: z.ZodType<ProviderOrganizationWithPartialRelations> = ProviderOrganizationSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema),
  provider: z.lazy(() => ProviderPartialWithRelationsSchema),
}).partial())

export default ProviderOrganizationSchema;
