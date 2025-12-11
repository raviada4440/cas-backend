import * as z from 'zod/v4'

import { Uuid, UtcDateTime } from './common'

export const ProviderSummary = z.object({
  id: Uuid,
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  name: z.string().nullable(),
  email: z.string().nullable().optional(),
  userAttributeId: Uuid.nullable().optional(),
  npi: z.string().nullable(),
  specialty: z.string().nullable(),
})
export type ProviderSummary = z.infer<typeof ProviderSummary>

export const ProviderDetail = ProviderSummary.extend({
  credentials: z.string().nullable(),
  gender: z.string().nullable(),
  providerType: z.string().nullable(),
  affiliation: z.string().nullable(),
  aboutme: z.string().nullable(),
  proceduresAndResearch: z.string().nullable(),
  specialInterests: z.string().nullable(),
  href: z.string().nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type ProviderDetail = z.infer<typeof ProviderDetail>

export const ProviderSearchParams = z.object({
  search: z.string().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
  organizationId: z.string().uuid().optional(),
  specialty: z.string().optional(),
})
export type ProviderSearchParams = z.infer<typeof ProviderSearchParams>

export const ProviderSearchResponse = z.object({
  items: z.array(ProviderSummary),
  nextCursor: z.string().nullable(),
  totalCount: z.number().int().nonnegative().optional(),
})
export type ProviderSearchResponse = z.infer<typeof ProviderSearchResponse>

export const CreateProviderInput = ProviderDetail.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})
  .extend({
    firstName: z.string().nullable().optional(),
    lastName: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
  })
  .partial()
export type CreateProviderInput = z.infer<typeof CreateProviderInput>

export const UpdateProviderInput = ProviderDetail.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).partial()
export type UpdateProviderInput = z.infer<typeof UpdateProviderInput>

export const ProviderIdParam = z.object({
  providerId: Uuid,
})
export type ProviderIdParam = z.infer<typeof ProviderIdParam>

export const ProviderEducationRecord = z
  .object({
    id: Uuid,
    providerId: Uuid,
    providerNpi: z.string().nullable(),
    name: z.string().nullable(),
    educationType: z.string().nullable(),
    schoolName: z.string().nullable(),
    areaOfEducation: z.string().nullable(),
    createdAt: UtcDateTime,
    updatedAt: UtcDateTime.optional(),
  })
  .strict()
export type ProviderEducationRecord = z.infer<typeof ProviderEducationRecord>

export const ProviderEducationListResponse = z
  .object({
    items: z.array(ProviderEducationRecord),
  })
  .strict()
export type ProviderEducationListResponse = z.infer<typeof ProviderEducationListResponse>

export const ProviderFavoriteTestRecord = z
  .object({
    id: Uuid,
    providerId: Uuid.nullable(),
    testId: Uuid.nullable(),
    casandraTestId: z.string().nullable(),
    testName: z.string().nullable(),
    labName: z.string().nullable(),
    createdAt: UtcDateTime,
  })
  .strict()
export type ProviderFavoriteTestRecord = z.infer<typeof ProviderFavoriteTestRecord>

export const ProviderFavoriteTestListResponse = z
  .object({
    items: z.array(ProviderFavoriteTestRecord),
  })
  .strict()
export type ProviderFavoriteTestListResponse = z.infer<typeof ProviderFavoriteTestListResponse>

export const ProviderFavoriteCreateInput = z
  .object({
    testId: Uuid,
  })
  .strict()
export type ProviderFavoriteCreateInput = z.infer<typeof ProviderFavoriteCreateInput>

export const ProviderOrderRecord = z
  .object({
    id: Uuid,
    orderNumber: z.number().int().nullable(),
    casandraTestId: z.string().nullable(),
    testName: z.string().nullable(),
    status: z.string().nullable(),
    orderedAt: z.string().nullable(),
    patientName: z.string().nullable(),
    organizationName: z.string().nullable(),
    role: z.enum(['ordering', 'treating']).nullable(),
  })
  .strict()
export type ProviderOrderRecord = z.infer<typeof ProviderOrderRecord>

export const ProviderOrderListResponse = z
  .object({
    items: z.array(ProviderOrderRecord),
  })
  .strict()
export type ProviderOrderListResponse = z.infer<typeof ProviderOrderListResponse>

export const ProviderUserAccountResponse = z
  .object({
    provider: ProviderSummary,
    userId: Uuid,
    userAttributeId: Uuid,
    verificationToken: z.string().nullable(),
    autoVerified: z.boolean(),
  })
  .strict()
export type ProviderUserAccountResponse = z.infer<typeof ProviderUserAccountResponse>

export const ProviderUpsertInput = UpdateProviderInput.extend({
  id: Uuid.optional(),
}).strict()
export type ProviderUpsertInput = z.infer<typeof ProviderUpsertInput>

export const ProviderOrganizationRecord = z
  .object({
    id: Uuid,
    providerId: Uuid,
    organizationId: Uuid,
    providerNpi: z.string().nullable(),
    name: z.string().nullable(),
    parentOrgName: z.string().nullable(),
    orgName: z.string().nullable(),
    orgAddress: z.string().nullable(),
    orgCity: z.string().nullable(),
    orgState: z.string().nullable(),
    orgZip: z.string().nullable(),
    createdAt: UtcDateTime,
    updatedAt: UtcDateTime,
  })
  .strict()
export type ProviderOrganizationRecord = z.infer<typeof ProviderOrganizationRecord>

export const ProviderOrganizationLinkInput = z
  .object({
    organizationId: Uuid,
    providerNpi: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    parentOrgName: z.string().nullable().optional(),
    orgName: z.string().nullable().optional(),
    orgAddress: z.string().nullable().optional(),
    orgCity: z.string().nullable().optional(),
    orgState: z.string().nullable().optional(),
    orgZip: z.string().nullable().optional(),
  })
  .strict()
export type ProviderOrganizationLinkInput = z.infer<typeof ProviderOrganizationLinkInput>

export const ProviderOrganizationListResponse = z
  .object({
    items: z.array(ProviderOrganizationRecord),
  })
  .strict()
export type ProviderOrganizationListResponse = z.infer<typeof ProviderOrganizationListResponse>

export const ProviderStatsResponse = z
  .object({
    totalProviders: z.number().int().nonnegative(),
    providersWithOrganizations: z.number().int().nonnegative(),
    providersWithoutOrganizations: z.number().int().nonnegative(),
  })
  .strict()
export type ProviderStatsResponse = z.infer<typeof ProviderStatsResponse>

export const ProviderBulkUpdateInput = z
  .object({
    providerIds: z.array(Uuid).min(1),
    updateData: UpdateProviderInput.partial(),
  })
  .strict()
export type ProviderBulkUpdateInput = z.infer<typeof ProviderBulkUpdateInput>

export const ProviderBulkUpdateResult = z
  .object({
    updated: z.number().int().nonnegative(),
  })
  .strict()
export type ProviderBulkUpdateResult = z.infer<typeof ProviderBulkUpdateResult>

export const ProviderEducationCreateInput = ProviderEducationRecord.pick({
  providerNpi: true,
  name: true,
  educationType: true,
  schoolName: true,
  areaOfEducation: true,
}).partial({
  providerNpi: true,
  name: true,
  educationType: true,
  schoolName: true,
  areaOfEducation: true,
})
export type ProviderEducationCreateInput = z.infer<typeof ProviderEducationCreateInput>

export const ProviderByNpiParam = z
  .object({
    npi: z.string().min(1),
  })
  .strict()
export type ProviderByNpiParam = z.infer<typeof ProviderByNpiParam>

