import { z } from 'zod';
import { LabOrderIcdWithRelationsSchema, LabOrderIcdPartialWithRelationsSchema } from './LabOrderIcdSchema'
import type { LabOrderIcdWithRelations, LabOrderIcdPartialWithRelations } from './LabOrderIcdSchema'

/////////////////////////////////////////
// ICD SCHEMA
/////////////////////////////////////////

export const IcdSchema = z.object({
  id: z.string(),
  code: z.string().nullable(),
  shortDescription: z.string().nullable(),
  alias1: z.string().nullable(),
  alias2: z.string().nullable(),
  alias3: z.string().nullable(),
  alias4: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Icd = z.infer<typeof IcdSchema>

/////////////////////////////////////////
// ICD PARTIAL SCHEMA
/////////////////////////////////////////

export const IcdPartialSchema = IcdSchema.partial()

export type IcdPartial = z.infer<typeof IcdPartialSchema>

/////////////////////////////////////////
// ICD RELATION SCHEMA
/////////////////////////////////////////

export type IcdRelations = {
  labOrderIcds: LabOrderIcdWithRelations[];
};

export type IcdWithRelations = z.infer<typeof IcdSchema> & IcdRelations

export const IcdWithRelationsSchema: z.ZodType<IcdWithRelations> = IcdSchema.merge(z.object({
  labOrderIcds: z.lazy(() => LabOrderIcdWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ICD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type IcdPartialRelations = {
  labOrderIcds?: LabOrderIcdPartialWithRelations[];
};

export type IcdPartialWithRelations = z.infer<typeof IcdPartialSchema> & IcdPartialRelations

export const IcdPartialWithRelationsSchema: z.ZodType<IcdPartialWithRelations> = IcdPartialSchema.merge(z.object({
  labOrderIcds: z.lazy(() => LabOrderIcdPartialWithRelationsSchema).array(),
})).partial()

export type IcdWithPartialRelations = z.infer<typeof IcdSchema> & IcdPartialRelations

export const IcdWithPartialRelationsSchema: z.ZodType<IcdWithPartialRelations> = IcdSchema.merge(z.object({
  labOrderIcds: z.lazy(() => LabOrderIcdPartialWithRelationsSchema).array(),
}).partial())

export default IcdSchema;
