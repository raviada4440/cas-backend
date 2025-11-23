import * as z from 'zod/v4'

export const OrganizationEndpointRecord = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid().nullable(),
  orgName: z.string().nullable(),
  ehrVendor: z.string().nullable(),
  fhirVersion: z.string().nullable(),
  endpoint: z.string().nullable(),
  issuer: z.string().nullable(),
  authorizationEndpoint: z.string().nullable().optional(),
  tokenEndpoint: z.string().nullable().optional(),
  isActive: z.boolean().nullable().optional(),
})
export type OrganizationEndpointRecord = z.infer<typeof OrganizationEndpointRecord>

export const OrganizationEndpointListResponse = z.object({
  items: z.array(OrganizationEndpointRecord),
})
export type OrganizationEndpointListResponse = z.infer<typeof OrganizationEndpointListResponse>

export const OrganizationEndpointDirectoryQuery = z
  .object({
    search: z.string().trim().min(1).optional(),
    vendor: z.string().trim().min(1).optional(),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  })
  .strict()
export type OrganizationEndpointDirectoryQuery = z.infer<
  typeof OrganizationEndpointDirectoryQuery
>



