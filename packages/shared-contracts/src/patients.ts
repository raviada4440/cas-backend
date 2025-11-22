import * as z from 'zod/v4'

import { Uuid, UtcDateTime } from './common.js'

export const PatientSummary = z.object({
  id: Uuid,
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string().nullable(),
  mobile: z.string().nullable(),
})
export type PatientSummary = z.infer<typeof PatientSummary>

export const PatientDetail = PatientSummary.extend({
  dateOfBirth: UtcDateTime.nullable(),
  gender: z.string().nullable(),
  addressLine1: z.string().nullable().optional(),
  addressLine2: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  postalCode: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type PatientDetail = z.infer<typeof PatientDetail>

export const PatientSearchParams = z.object({
  search: z.string().default(''),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
})
export type PatientSearchParams = z.infer<typeof PatientSearchParams>

export const PatientSearchResponse = z.object({
  items: z.array(PatientSummary),
  nextCursor: z.string().nullable(),
})
export type PatientSearchResponse = z.infer<typeof PatientSearchResponse>

export const CreatePatientInput = z.object({
  firstName: z.string().nullable().optional(),
  lastName: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  mobile: z.string().nullable().optional(),
  gender: z.string().nullable().optional(),
  dateOfBirth: z.string().datetime().optional(),
  addressLine1: z.string().nullable().optional(),
  addressLine2: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  postalCode: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
})
export type CreatePatientInput = z.infer<typeof CreatePatientInput>

export const UpdatePatientInput = CreatePatientInput.partial()
export type UpdatePatientInput = z.infer<typeof UpdatePatientInput>

export const PatientIdParam = z.object({
  patientId: Uuid,
})
export type PatientIdParam = z.infer<typeof PatientIdParam>

