import { z } from 'zod/v4'

const FhirUrl = z.string().url().or(z.string().min(1))

const FhirResource = z.object({}).passthrough()

export const FhirBaseRequest = z
  .object({
    fhirEndpoint: FhirUrl,
    accessToken: z.string().min(1),
  })
  .strict()

export const FhirPractitionerRequest = FhirBaseRequest.extend({
  fhirUser: FhirUrl,
}).strict()

export const FhirPractitionerRoleRequest = FhirBaseRequest.extend({
  providerAccountId: z.string().min(1),
}).strict()

export const FhirLocationRequest = FhirBaseRequest.extend({
  fhirLocation: FhirUrl,
}).strict()

export const FhirOrganizationRequest = FhirBaseRequest.extend({
  fhirOrganization: FhirUrl,
}).strict()

export const FhirPatientRequest = FhirBaseRequest.extend({
  fhirPatient: FhirUrl,
}).strict()

export const FhirResourceRequest = FhirBaseRequest.extend({
  resourceType: z.string().min(1),
  resourceId: z.string().min(1),
}).strict()

export const FhirBundleResponse = FhirResource
export const FhirPractitionerResponse = FhirResource
export const FhirPractitionerRoleResponse = FhirResource
export const FhirLocationResponse = FhirResource
export const FhirOrganizationResponse = FhirResource
export const FhirPatientResponse = FhirResource
export const FhirGenericResourceResponse = FhirResource

export type FhirBaseRequest = z.infer<typeof FhirBaseRequest>
export type FhirPractitionerRequest = z.infer<typeof FhirPractitionerRequest>
export type FhirPractitionerRoleRequest = z.infer<typeof FhirPractitionerRoleRequest>
export type FhirLocationRequest = z.infer<typeof FhirLocationRequest>
export type FhirOrganizationRequest = z.infer<typeof FhirOrganizationRequest>
export type FhirPatientRequest = z.infer<typeof FhirPatientRequest>
export type FhirResourceRequest = z.infer<typeof FhirResourceRequest>

export type FhirBundleResponse = z.infer<typeof FhirBundleResponse>
export type FhirPractitionerResponse = z.infer<typeof FhirPractitionerResponse>
export type FhirPractitionerRoleResponse = z.infer<typeof FhirPractitionerRoleResponse>
export type FhirLocationResponse = z.infer<typeof FhirLocationResponse>
export type FhirOrganizationResponse = z.infer<typeof FhirOrganizationResponse>
export type FhirPatientResponse = z.infer<typeof FhirPatientResponse>
export type FhirGenericResourceResponse = z.infer<typeof FhirGenericResourceResponse>

export const FhirPatient = z.object({
  id: z.string().nullable(),
  resourceId: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  dateOfBirth: z.string().nullable(),
  gender: z.string().nullable(),
  mrn: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  fullName: z.string(),
})
export type FhirPatient = z.infer<typeof FhirPatient>

export const FhirProvider = z.enum(['epic', 'cerner', 'generic-ehr'])
export type FhirProvider = z.infer<typeof FhirProvider>

export const FhirPatientSearchInput = z.object({
  search: z.string().min(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
  provider: FhirProvider.optional(),
})
export type FhirPatientSearchInput = z.infer<typeof FhirPatientSearchInput>

export const FhirPatientSearchResponse = z.object({
  items: z.array(FhirPatient),
  nextCursor: z.string().nullable(),
  warning: z.string().nullable().optional(),
})
export type FhirPatientSearchResponse = z.infer<typeof FhirPatientSearchResponse>

export const FhirPatientDetailInput = z.object({
  provider: FhirProvider.optional(),
})
export type FhirPatientDetailInput = z.infer<typeof FhirPatientDetailInput>

export const FhirPatientDetailResponse = z.object({
  patient: FhirPatient,
  warning: z.string().nullable().optional(),
})
export type FhirPatientDetailResponse = z.infer<typeof FhirPatientDetailResponse>

