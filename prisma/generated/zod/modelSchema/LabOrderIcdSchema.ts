import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { IcdWithRelationsSchema, IcdPartialWithRelationsSchema } from './IcdSchema'
import type { IcdWithRelations, IcdPartialWithRelations } from './IcdSchema'

/////////////////////////////////////////
// LAB ORDER ICD SCHEMA
/////////////////////////////////////////

export const LabOrderIcdSchema = z.object({
  id: z.string(),
  labOrderId: z.string().nullable(),
  icdId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderIcd = z.infer<typeof LabOrderIcdSchema>

/////////////////////////////////////////
// LAB ORDER ICD PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderIcdPartialSchema = LabOrderIcdSchema.partial()

export type LabOrderIcdPartial = z.infer<typeof LabOrderIcdPartialSchema>

/////////////////////////////////////////
// LAB ORDER ICD RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderIcdRelations = {
  labOrder?: LabOrderWithRelations | null;
  icd?: IcdWithRelations | null;
};

export type LabOrderIcdWithRelations = z.infer<typeof LabOrderIcdSchema> & LabOrderIcdRelations

export const LabOrderIcdWithRelationsSchema: z.ZodType<LabOrderIcdWithRelations> = LabOrderIcdSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema).nullable(),
  icd: z.lazy(() => IcdWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER ICD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderIcdPartialRelations = {
  labOrder?: LabOrderPartialWithRelations | null;
  icd?: IcdPartialWithRelations | null;
};

export type LabOrderIcdPartialWithRelations = z.infer<typeof LabOrderIcdPartialSchema> & LabOrderIcdPartialRelations

export const LabOrderIcdPartialWithRelationsSchema: z.ZodType<LabOrderIcdPartialWithRelations> = LabOrderIcdPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
  icd: z.lazy(() => IcdPartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderIcdWithPartialRelations = z.infer<typeof LabOrderIcdSchema> & LabOrderIcdPartialRelations

export const LabOrderIcdWithPartialRelationsSchema: z.ZodType<LabOrderIcdWithPartialRelations> = LabOrderIcdSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
  icd: z.lazy(() => IcdPartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderIcdSchema;
