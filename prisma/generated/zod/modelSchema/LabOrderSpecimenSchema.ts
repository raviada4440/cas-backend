import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'

/////////////////////////////////////////
// LAB ORDER SPECIMEN SCHEMA
/////////////////////////////////////////

export const LabOrderSpecimenSchema = z.object({
  id: z.string(),
  labOrderId: z.string().nullable(),
  specimenType: z.string().nullable(),
  specimenCount: z.string().nullable(),
  collectedDate: z.date().nullable(),
  collectedTime: z.string().nullable(),
  specimenId: z.string().nullable(),
  bodySite: z.string().nullable(),
  tumorType: z.string().nullable(),
  fixative: z.string().nullable(),
  fixativeDuration: z.string().nullable(),
  coldIschemicTime: z.string().nullable(),
  patientAddress1: z.string().nullable(),
  patientAddress2: z.string().nullable(),
  patientCity: z.string().nullable(),
  patientState: z.string().nullable(),
  patientZip: z.string().nullable(),
  pscLab: z.string().nullable(),
  pscLocation: z.string().nullable(),
  pscAppointmentAt: z.date().nullable(),
  pscAppointmentTime: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderSpecimen = z.infer<typeof LabOrderSpecimenSchema>

/////////////////////////////////////////
// LAB ORDER SPECIMEN PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderSpecimenPartialSchema = LabOrderSpecimenSchema.partial()

export type LabOrderSpecimenPartial = z.infer<typeof LabOrderSpecimenPartialSchema>

/////////////////////////////////////////
// LAB ORDER SPECIMEN RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderSpecimenRelations = {
  labOrder?: LabOrderWithRelations | null;
};

export type LabOrderSpecimenWithRelations = z.infer<typeof LabOrderSpecimenSchema> & LabOrderSpecimenRelations

export const LabOrderSpecimenWithRelationsSchema: z.ZodType<LabOrderSpecimenWithRelations> = LabOrderSpecimenSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER SPECIMEN PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderSpecimenPartialRelations = {
  labOrder?: LabOrderPartialWithRelations | null;
};

export type LabOrderSpecimenPartialWithRelations = z.infer<typeof LabOrderSpecimenPartialSchema> & LabOrderSpecimenPartialRelations

export const LabOrderSpecimenPartialWithRelationsSchema: z.ZodType<LabOrderSpecimenPartialWithRelations> = LabOrderSpecimenPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderSpecimenWithPartialRelations = z.infer<typeof LabOrderSpecimenSchema> & LabOrderSpecimenPartialRelations

export const LabOrderSpecimenWithPartialRelationsSchema: z.ZodType<LabOrderSpecimenWithPartialRelations> = LabOrderSpecimenSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderSpecimenSchema;
