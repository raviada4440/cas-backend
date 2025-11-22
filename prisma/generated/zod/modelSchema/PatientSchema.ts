import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { PatientOrganizationWithRelationsSchema, PatientOrganizationPartialWithRelationsSchema } from './PatientOrganizationSchema'
import type { PatientOrganizationWithRelations, PatientOrganizationPartialWithRelations } from './PatientOrganizationSchema'

/////////////////////////////////////////
// PATIENT SCHEMA
/////////////////////////////////////////

export const PatientSchema = z.object({
  id: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  dateOfBirth: z.date().nullable(),
  gender: z.string().nullable(),
  email: z.string().nullable(),
  mobile: z.string().nullable(),
  addressLine1: z.string().nullable(),
  addressLine2: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  postalCode: z.string().nullable(),
  country: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Patient = z.infer<typeof PatientSchema>

/////////////////////////////////////////
// PATIENT PARTIAL SCHEMA
/////////////////////////////////////////

export const PatientPartialSchema = PatientSchema.partial()

export type PatientPartial = z.infer<typeof PatientPartialSchema>

/////////////////////////////////////////
// PATIENT RELATION SCHEMA
/////////////////////////////////////////

export type PatientRelations = {
  labOrders: LabOrderWithRelations[];
  patientOrganizations: PatientOrganizationWithRelations[];
};

export type PatientWithRelations = z.infer<typeof PatientSchema> & PatientRelations

export const PatientWithRelationsSchema: z.ZodType<PatientWithRelations> = PatientSchema.merge(z.object({
  labOrders: z.lazy(() => LabOrderWithRelationsSchema).array(),
  patientOrganizations: z.lazy(() => PatientOrganizationWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PATIENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PatientPartialRelations = {
  labOrders?: LabOrderPartialWithRelations[];
  patientOrganizations?: PatientOrganizationPartialWithRelations[];
};

export type PatientPartialWithRelations = z.infer<typeof PatientPartialSchema> & PatientPartialRelations

export const PatientPartialWithRelationsSchema: z.ZodType<PatientPartialWithRelations> = PatientPartialSchema.merge(z.object({
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  patientOrganizations: z.lazy(() => PatientOrganizationPartialWithRelationsSchema).array(),
})).partial()

export type PatientWithPartialRelations = z.infer<typeof PatientSchema> & PatientPartialRelations

export const PatientWithPartialRelationsSchema: z.ZodType<PatientWithPartialRelations> = PatientSchema.merge(z.object({
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  patientOrganizations: z.lazy(() => PatientOrganizationPartialWithRelationsSchema).array(),
}).partial())

export default PatientSchema;
