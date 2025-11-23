import { z } from 'zod/v4'

export const OrganizationRecord = z.object({
  id: z.string().uuid(),
  parentId: z.string().uuid().nullable(),
  level: z.number().int().nullable(),
  parentOrgName: z.string().nullable(),
  orgName: z.string().nullable(),
  orgType: z.string().nullable(),
  orgSpecialty: z.string().nullable(),
  orgAddress: z.string().nullable(),
  orgCity: z.string().nullable(),
  orgState: z.string().nullable(),
  orgZip: z.string().nullable(),
  formattedAddress: z.string().nullable(),
  contactEmail: z.string().email().nullable().optional(),
  contactPhone: z.string().nullable().optional(),
})
export type OrganizationRecord = z.infer<typeof OrganizationRecord>

export const OrganizationListResponse = z.object({
  items: z.array(OrganizationRecord),
})
export type OrganizationListResponse = z.infer<typeof OrganizationListResponse>

const baseQuerySchema = {
  search: z
    .string()
    .trim()
    .min(1, 'Search text must be at least 1 character')
    .optional(),
  limit: z.coerce.number().int().min(1).max(500).default(20),
}

export const OrganizationDirectoryQuery = z.object(baseQuerySchema).strict()
export type OrganizationDirectoryQuery = z.infer<typeof OrganizationDirectoryQuery>

export const FacilityDirectoryQuery = z
  .object({
    ...baseQuerySchema,
    parentId: z.string().uuid().optional(),
  })
  .strict()
export type FacilityDirectoryQuery = z.infer<typeof FacilityDirectoryQuery>

const OptionalString = z
  .string()
  .trim()
  .min(1)
  .optional()

export const OrganizationCreateInput = z
  .object({
    parentId: z.string().uuid().nullable().optional(),
    orgName: z.string().trim().min(1),
    orgType: OptionalString,
    orgSpecialty: OptionalString,
    orgAddress: OptionalString,
    orgCity: OptionalString,
    orgState: OptionalString,
    orgZip: OptionalString,
  })
  .strict()
export type OrganizationCreateInput = z.infer<typeof OrganizationCreateInput>

export const FacilityCreateInput = OrganizationCreateInput.extend({
  parentId: z.string().uuid(),
}).strict()
export type FacilityCreateInput = z.infer<typeof FacilityCreateInput>

export const OrganizationUpdateInput = OrganizationCreateInput.partial().strict()
export type OrganizationUpdateInput = z.infer<typeof OrganizationUpdateInput>

export const OrganizationFavoriteTestRecord = z
  .object({
    id: z.string().uuid(),
    ownerOrgId: z.string().uuid().nullable(),
    ownerOrgName: z.string().nullable(),
    testId: z.string().uuid().nullable(),
    casandraTestId: z.string().nullable(),
    testName: z.string().nullable(),
    labName: z.string().nullable(),
    level: z.number().int().nullable(),
    parentName: z.string().nullable(),
    createdAt: z.string().nullable(),
  })
  .strict()
export type OrganizationFavoriteTestRecord = z.infer<typeof OrganizationFavoriteTestRecord>

export const OrganizationFavoriteTestListResponse = z
  .object({
    owned: z.array(OrganizationFavoriteTestRecord),
    inherited: z.array(OrganizationFavoriteTestRecord),
  })
  .strict()
export type OrganizationFavoriteTestListResponse = z.infer<
  typeof OrganizationFavoriteTestListResponse
>

export const OrganizationFavoriteCreateInput = z
  .object({
    testId: z.string().uuid(),
  })
  .strict()
export type OrganizationFavoriteCreateInput = z.infer<typeof OrganizationFavoriteCreateInput>

export const OrganizationResultRecord = z
  .object({
    id: z.string().uuid(),
    orderNumber: z.number().int().nullable(),
    casandraTestId: z.string().nullable(),
    testName: z.string().nullable(),
    status: z.string().nullable(),
    orderedAt: z.string().nullable(),
    providerName: z.string().nullable(),
    patientName: z.string().nullable(),
  })
  .strict()
export type OrganizationResultRecord = z.infer<typeof OrganizationResultRecord>

export const OrganizationResultListResponse = z
  .object({
    items: z.array(OrganizationResultRecord),
  })
  .strict()
export type OrganizationResultListResponse = z.infer<typeof OrganizationResultListResponse>

export const OrganizationBreadcrumb = z
  .object({
    id: z.string().uuid(),
    orgName: z.string().nullable(),
    parentId: z.string().uuid().nullable(),
    level: z.number().int().nullable(),
  })
  .strict()
export type OrganizationBreadcrumb = z.infer<typeof OrganizationBreadcrumb>

export const OrganizationAncestryResponse = z
  .object({ items: z.array(OrganizationBreadcrumb) })
  .strict()
export type OrganizationAncestryResponse = z.infer<typeof OrganizationAncestryResponse>



