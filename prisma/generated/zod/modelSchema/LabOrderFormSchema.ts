import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { TestCatalogVersionOrderFormWithRelationsSchema, TestCatalogVersionOrderFormPartialWithRelationsSchema } from './TestCatalogVersionOrderFormSchema'
import type { TestCatalogVersionOrderFormWithRelations, TestCatalogVersionOrderFormPartialWithRelations } from './TestCatalogVersionOrderFormSchema'
import { OrderFormTemplateWithRelationsSchema, OrderFormTemplatePartialWithRelationsSchema } from './OrderFormTemplateSchema'
import type { OrderFormTemplateWithRelations, OrderFormTemplatePartialWithRelations } from './OrderFormTemplateSchema'

/////////////////////////////////////////
// LAB ORDER FORM SCHEMA
/////////////////////////////////////////

export const LabOrderFormSchema = z.object({
  id: z.string(),
  labOrderId: z.string(),
  versionOrderFormId: z.string().nullable(),
  orderFormTemplateId: z.string().nullable(),
  displayOrder: z.number(),
  sectionName: z.string(),
  templateName: z.string().nullable(),
  formSchema: JsonValueSchema.nullable(),
  layoutSchema: JsonValueSchema.nullable(),
  responses: JsonValueSchema.nullable(),
  isCompleted: z.boolean(),
  completedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderForm = z.infer<typeof LabOrderFormSchema>

/////////////////////////////////////////
// LAB ORDER FORM PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderFormPartialSchema = LabOrderFormSchema.partial()

export type LabOrderFormPartial = z.infer<typeof LabOrderFormPartialSchema>

/////////////////////////////////////////
// LAB ORDER FORM RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderFormRelations = {
  labOrder: LabOrderWithRelations;
  versionOrderForm?: TestCatalogVersionOrderFormWithRelations | null;
  template?: OrderFormTemplateWithRelations | null;
};

export type LabOrderFormWithRelations = Omit<z.infer<typeof LabOrderFormSchema>, "formSchema" | "layoutSchema" | "responses"> & {
  formSchema?: JsonValueType | null;
  layoutSchema?: JsonValueType | null;
  responses?: JsonValueType | null;
} & LabOrderFormRelations

export const LabOrderFormWithRelationsSchema: z.ZodType<LabOrderFormWithRelations> = LabOrderFormSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema),
  versionOrderForm: z.lazy(() => TestCatalogVersionOrderFormWithRelationsSchema).nullable(),
  template: z.lazy(() => OrderFormTemplateWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER FORM PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderFormPartialRelations = {
  labOrder?: LabOrderPartialWithRelations;
  versionOrderForm?: TestCatalogVersionOrderFormPartialWithRelations | null;
  template?: OrderFormTemplatePartialWithRelations | null;
};

export type LabOrderFormPartialWithRelations = Omit<z.infer<typeof LabOrderFormPartialSchema>, "formSchema" | "layoutSchema" | "responses"> & {
  formSchema?: JsonValueType | null;
  layoutSchema?: JsonValueType | null;
  responses?: JsonValueType | null;
} & LabOrderFormPartialRelations

export const LabOrderFormPartialWithRelationsSchema: z.ZodType<LabOrderFormPartialWithRelations> = LabOrderFormPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema),
  versionOrderForm: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).nullable(),
  template: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderFormWithPartialRelations = Omit<z.infer<typeof LabOrderFormSchema>, "formSchema" | "layoutSchema" | "responses"> & {
  formSchema?: JsonValueType | null;
  layoutSchema?: JsonValueType | null;
  responses?: JsonValueType | null;
} & LabOrderFormPartialRelations

export const LabOrderFormWithPartialRelationsSchema: z.ZodType<LabOrderFormWithPartialRelations> = LabOrderFormSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema),
  versionOrderForm: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).nullable(),
  template: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderFormSchema;
