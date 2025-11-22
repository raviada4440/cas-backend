import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { OrderFormTemplateStatusSchema } from '../inputTypeSchemas/OrderFormTemplateStatusSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { OrderFormSectionWithRelationsSchema, OrderFormSectionPartialWithRelationsSchema } from './OrderFormSectionSchema'
import type { OrderFormSectionWithRelations, OrderFormSectionPartialWithRelations } from './OrderFormSectionSchema'
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'
import { TestCatalogVersionOrderFormWithRelationsSchema, TestCatalogVersionOrderFormPartialWithRelationsSchema } from './TestCatalogVersionOrderFormSchema'
import type { TestCatalogVersionOrderFormWithRelations, TestCatalogVersionOrderFormPartialWithRelations } from './TestCatalogVersionOrderFormSchema'
import { LabOrderFormWithRelationsSchema, LabOrderFormPartialWithRelationsSchema } from './LabOrderFormSchema'
import type { LabOrderFormWithRelations, LabOrderFormPartialWithRelations } from './LabOrderFormSchema'

/////////////////////////////////////////
// ORDER FORM TEMPLATE SCHEMA
/////////////////////////////////////////

export const OrderFormTemplateSchema = z.object({
  status: OrderFormTemplateStatusSchema,
  id: z.string(),
  orderFormSectionId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  version: z.number(),
  effectiveDate: z.date().nullable(),
  retiredDate: z.date().nullable(),
  formSchema: JsonValueSchema.nullable(),
  layoutSchema: JsonValueSchema.nullable(),
  organizationId: z.string().nullable(),
  isGlobal: z.boolean(),
  createdBy: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type OrderFormTemplate = z.infer<typeof OrderFormTemplateSchema>

/////////////////////////////////////////
// ORDER FORM TEMPLATE PARTIAL SCHEMA
/////////////////////////////////////////

export const OrderFormTemplatePartialSchema = OrderFormTemplateSchema.partial()

export type OrderFormTemplatePartial = z.infer<typeof OrderFormTemplatePartialSchema>

/////////////////////////////////////////
// ORDER FORM TEMPLATE RELATION SCHEMA
/////////////////////////////////////////

export type OrderFormTemplateRelations = {
  section: OrderFormSectionWithRelations;
  organization?: OrganizationWithRelations | null;
  assignments: TestCatalogVersionOrderFormWithRelations[];
  labOrderForms: LabOrderFormWithRelations[];
};

export type OrderFormTemplateWithRelations = Omit<z.infer<typeof OrderFormTemplateSchema>, "formSchema" | "layoutSchema"> & {
  formSchema?: JsonValueType | null;
  layoutSchema?: JsonValueType | null;
} & OrderFormTemplateRelations

export const OrderFormTemplateWithRelationsSchema: z.ZodType<OrderFormTemplateWithRelations> = OrderFormTemplateSchema.merge(z.object({
  section: z.lazy(() => OrderFormSectionWithRelationsSchema),
  organization: z.lazy(() => OrganizationWithRelationsSchema).nullable(),
  assignments: z.lazy(() => TestCatalogVersionOrderFormWithRelationsSchema).array(),
  labOrderForms: z.lazy(() => LabOrderFormWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ORDER FORM TEMPLATE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type OrderFormTemplatePartialRelations = {
  section?: OrderFormSectionPartialWithRelations;
  organization?: OrganizationPartialWithRelations | null;
  assignments?: TestCatalogVersionOrderFormPartialWithRelations[];
  labOrderForms?: LabOrderFormPartialWithRelations[];
};

export type OrderFormTemplatePartialWithRelations = Omit<z.infer<typeof OrderFormTemplatePartialSchema>, "formSchema" | "layoutSchema"> & {
  formSchema?: JsonValueType | null;
  layoutSchema?: JsonValueType | null;
} & OrderFormTemplatePartialRelations

export const OrderFormTemplatePartialWithRelationsSchema: z.ZodType<OrderFormTemplatePartialWithRelations> = OrderFormTemplatePartialSchema.merge(z.object({
  section: z.lazy(() => OrderFormSectionPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  assignments: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).array(),
  labOrderForms: z.lazy(() => LabOrderFormPartialWithRelationsSchema).array(),
})).partial()

export type OrderFormTemplateWithPartialRelations = Omit<z.infer<typeof OrderFormTemplateSchema>, "formSchema" | "layoutSchema"> & {
  formSchema?: JsonValueType | null;
  layoutSchema?: JsonValueType | null;
} & OrderFormTemplatePartialRelations

export const OrderFormTemplateWithPartialRelationsSchema: z.ZodType<OrderFormTemplateWithPartialRelations> = OrderFormTemplateSchema.merge(z.object({
  section: z.lazy(() => OrderFormSectionPartialWithRelationsSchema),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  assignments: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).array(),
  labOrderForms: z.lazy(() => LabOrderFormPartialWithRelationsSchema).array(),
}).partial())

export default OrderFormTemplateSchema;
