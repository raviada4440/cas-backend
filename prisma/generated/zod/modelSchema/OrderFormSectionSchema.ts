import { z } from 'zod';
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'
import { OrderFormTemplateWithRelationsSchema, OrderFormTemplatePartialWithRelationsSchema } from './OrderFormTemplateSchema'
import type { OrderFormTemplateWithRelations, OrderFormTemplatePartialWithRelations } from './OrderFormTemplateSchema'

/////////////////////////////////////////
// ORDER FORM SECTION SCHEMA
/////////////////////////////////////////

export const OrderFormSectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  sortOrder: z.number(),
  isActive: z.boolean(),
  organizationId: z.string().nullable(),
  createdBy: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type OrderFormSection = z.infer<typeof OrderFormSectionSchema>

/////////////////////////////////////////
// ORDER FORM SECTION PARTIAL SCHEMA
/////////////////////////////////////////

export const OrderFormSectionPartialSchema = OrderFormSectionSchema.partial()

export type OrderFormSectionPartial = z.infer<typeof OrderFormSectionPartialSchema>

/////////////////////////////////////////
// ORDER FORM SECTION RELATION SCHEMA
/////////////////////////////////////////

export type OrderFormSectionRelations = {
  organization?: OrganizationWithRelations | null;
  templates: OrderFormTemplateWithRelations[];
};

export type OrderFormSectionWithRelations = z.infer<typeof OrderFormSectionSchema> & OrderFormSectionRelations

export const OrderFormSectionWithRelationsSchema: z.ZodType<OrderFormSectionWithRelations> = OrderFormSectionSchema.merge(z.object({
  organization: z.lazy(() => OrganizationWithRelationsSchema).nullable(),
  templates: z.lazy(() => OrderFormTemplateWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ORDER FORM SECTION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type OrderFormSectionPartialRelations = {
  organization?: OrganizationPartialWithRelations | null;
  templates?: OrderFormTemplatePartialWithRelations[];
};

export type OrderFormSectionPartialWithRelations = z.infer<typeof OrderFormSectionPartialSchema> & OrderFormSectionPartialRelations

export const OrderFormSectionPartialWithRelationsSchema: z.ZodType<OrderFormSectionPartialWithRelations> = OrderFormSectionPartialSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  templates: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema).array(),
})).partial()

export type OrderFormSectionWithPartialRelations = z.infer<typeof OrderFormSectionSchema> & OrderFormSectionPartialRelations

export const OrderFormSectionWithPartialRelationsSchema: z.ZodType<OrderFormSectionWithPartialRelations> = OrderFormSectionSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  templates: z.lazy(() => OrderFormTemplatePartialWithRelationsSchema).array(),
}).partial())

export default OrderFormSectionSchema;
