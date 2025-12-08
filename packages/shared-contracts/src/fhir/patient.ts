import * as z from 'zod/v4'

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

