import { z } from 'zod';
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { OrderFormTemplateWithRelationsSchema, OrderFormTemplatePartialWithRelationsSchema } from './OrderFormTemplateSchema'
import type { OrderFormTemplateWithRelations, OrderFormTemplatePartialWithRelations } from './OrderFormTemplateSchema'
import { LabOrderFormWithRelationsSchema, LabOrderFormPartialWithRelationsSchema } from './LabOrderFormSchema'
import type { LabOrderFormWithRelations, LabOrderFormPartialWithRelations } from './LabOrderFormSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER FORM SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionOrderFormSchema = z.object({
  id: z.string(),
  versionId: z.string(),
  configurationId: z.string().nullable(),
  orderFormTemplateId: z.string(),
  displayOrder: z.number(),
  customTitle: z.string().nullable(),
  isRequired: z.boolean(),
  isVisible: z.boolean(),
  createdBy: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersionOrderForm = z.infer<typeof TestCatalogVersionOrderFormSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER FORM PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionOrderFormPartialSchema = TestCatalogVersionOrderFormSchema.partial()

export type TestCatalogVersionOrderFormPartial = z.infer<typeof TestCatalogVersionOrderFormPartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER FORM RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionOrderFormRelations = {
  version: TestCatalogVersionWithRelations;
  configuration?: TestCatalogConfigurationWithRelations | null;
  template: OrderFormTemplateWithRelations;
  labOrderForms: LabOrderFormWithRelations[];
};

export type TestCatalogVersionOrderFormWithRelations = z.infer<typeof TestCatalogVersionOrderFormSchema> & TestCatalogVersionOrderFormRelations

export const TestCatalogVersionOrderFormWithRelationsSchema: z.ZodType<TestCatalogVersionOrderFormWithRelations> = TestCatalogVersionOrderFormSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema).nullable(),
  template: z.lazy(() => OrderFormTemplateWithRelationsSchema),
  labOrderForms: z.lazy(() => LabOrderFormWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER FORM PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionOrderFormPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
  configuration?: TestCatalogConfigurationPartialWithRelations | null;
  template?: OrderFormTemplatePartialWithRelations;
  labOrderForms?: LabOrderFormPartialWithRelations[];
};

export type TestCatalogVersionOrderFormPartialWithRelations = z.infer<typeof TestCatalogVersionOrderFormPartialSchema> & TestCatalogVersionOrderFormPartialRelations

export const TestCatalogVersionOrderFormPartialWithRelationsSchema: z.ZodType<TestCatalogVersionOrderFormPartialWithRelations> = TestCatalogVersionOrderFormPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).nullable(),
  template: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema),
  labOrderForms: z.lazy(() => LabOrderFormPartialWithRelationsSchema).array(),
})).partial()

export type TestCatalogVersionOrderFormWithPartialRelations = z.infer<typeof TestCatalogVersionOrderFormSchema> & TestCatalogVersionOrderFormPartialRelations

export const TestCatalogVersionOrderFormWithPartialRelationsSchema: z.ZodType<TestCatalogVersionOrderFormWithPartialRelations> = TestCatalogVersionOrderFormSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).nullable(),
  template: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema),
  labOrderForms: z.lazy(() => LabOrderFormPartialWithRelationsSchema).array(),
}).partial())

export default TestCatalogVersionOrderFormSchema;
