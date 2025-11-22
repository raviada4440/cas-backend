import { z } from 'zod';
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'
import { PatientWithRelationsSchema, PatientPartialWithRelationsSchema } from './PatientSchema'
import type { PatientWithRelations, PatientPartialWithRelations } from './PatientSchema'

/////////////////////////////////////////
// PATIENT ORGANIZATION SCHEMA
/////////////////////////////////////////

export const PatientOrganizationSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  organizationId: z.string(),
  mrn: z.string().nullable(),
  mobile: z.string().nullable(),
  email: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type PatientOrganization = z.infer<typeof PatientOrganizationSchema>

/////////////////////////////////////////
// PATIENT ORGANIZATION PARTIAL SCHEMA
/////////////////////////////////////////

export const PatientOrganizationPartialSchema = PatientOrganizationSchema.partial()

export type PatientOrganizationPartial = z.infer<typeof PatientOrganizationPartialSchema>

/////////////////////////////////////////
// PATIENT ORGANIZATION RELATION SCHEMA
/////////////////////////////////////////

export type PatientOrganizationRelations = {
  organization: OrganizationWithRelations;
  patient: PatientWithRelations;
};

export type PatientOrganizationWithRelations = z.infer<typeof PatientOrganizationSchema> & PatientOrganizationRelations

export const PatientOrganizationWithRelationsSchema: z.ZodType<PatientOrganizationWithRelations> = PatientOrganizationSchema.merge(z.object({
  organization: z.lazy(() => OrganizationWithRelationsSchema),
  patient: z.lazy(() => PatientWithRelationsSchema),
}))

/////////////////////////////////////////
// PATIENT ORGANIZATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PatientOrganizationPartialRelations = {
  organization?: OrganizationPartialWithRelations;
  patient?: PatientPartialWithRelations;
};

export type PatientOrganizationPartialWithRelations = z.infer<typeof PatientOrganizationPartialSchema> & PatientOrganizationPartialRelations

export const PatientOrganizationPartialWithRelationsSchema: z.ZodType<PatientOrganizationPartialWithRelations> = PatientOrganizationPartialSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema),
  patient: z.lazy(() => PatientPartialWithRelationsSchema),
})).partial()

export type PatientOrganizationWithPartialRelations = z.infer<typeof PatientOrganizationSchema> & PatientOrganizationPartialRelations

export const PatientOrganizationWithPartialRelationsSchema: z.ZodType<PatientOrganizationWithPartialRelations> = PatientOrganizationSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema),
  patient: z.lazy(() => PatientPartialWithRelationsSchema),
}).partial())

export default PatientOrganizationSchema;
