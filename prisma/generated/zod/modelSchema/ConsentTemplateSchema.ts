import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { ConsentTypeSchema } from '../inputTypeSchemas/ConsentTypeSchema'
import { ConsentTemplateStatusSchema } from '../inputTypeSchemas/ConsentTemplateStatusSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { TestCatalogVersionConsentWithRelationsSchema, TestCatalogVersionConsentPartialWithRelationsSchema } from './TestCatalogVersionConsentSchema'
import type { TestCatalogVersionConsentWithRelations, TestCatalogVersionConsentPartialWithRelations } from './TestCatalogVersionConsentSchema'
import { LabOrderConsentWithRelationsSchema, LabOrderConsentPartialWithRelationsSchema } from './LabOrderConsentSchema'
import type { LabOrderConsentWithRelations, LabOrderConsentPartialWithRelations } from './LabOrderConsentSchema'
import { ConsentAuditLogWithRelationsSchema, ConsentAuditLogPartialWithRelationsSchema } from './ConsentAuditLogSchema'
import type { ConsentAuditLogWithRelations, ConsentAuditLogPartialWithRelations } from './ConsentAuditLogSchema'

/////////////////////////////////////////
// CONSENT TEMPLATE SCHEMA
/////////////////////////////////////////

export const ConsentTemplateSchema = z.object({
  consentType: ConsentTypeSchema,
  status: ConsentTemplateStatusSchema,
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  isRequired: z.boolean(),
  title: z.string(),
  content: z.string(),
  legalText: z.string().nullable(),
  formSchema: JsonValueSchema.nullable(),
  version: z.number(),
  effectiveDate: z.date().nullable(),
  retiredDate: z.date().nullable(),
  organizationId: z.string().nullable(),
  isGlobal: z.boolean(),
  createdBy: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type ConsentTemplate = z.infer<typeof ConsentTemplateSchema>

/////////////////////////////////////////
// CONSENT TEMPLATE PARTIAL SCHEMA
/////////////////////////////////////////

export const ConsentTemplatePartialSchema = ConsentTemplateSchema.partial()

export type ConsentTemplatePartial = z.infer<typeof ConsentTemplatePartialSchema>

/////////////////////////////////////////
// CONSENT TEMPLATE RELATION SCHEMA
/////////////////////////////////////////

export type ConsentTemplateRelations = {
  versionConsents: TestCatalogVersionConsentWithRelations[];
  labOrderConsents: LabOrderConsentWithRelations[];
  auditLogs: ConsentAuditLogWithRelations[];
};

export type ConsentTemplateWithRelations = Omit<z.infer<typeof ConsentTemplateSchema>, "formSchema"> & {
  formSchema?: JsonValueType | null;
} & ConsentTemplateRelations

export const ConsentTemplateWithRelationsSchema: z.ZodType<ConsentTemplateWithRelations> = ConsentTemplateSchema.merge(z.object({
  versionConsents: z.lazy(() => TestCatalogVersionConsentWithRelationsSchema).array(),
  labOrderConsents: z.lazy(() => LabOrderConsentWithRelationsSchema).array(),
  auditLogs: z.lazy(() => ConsentAuditLogWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CONSENT TEMPLATE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ConsentTemplatePartialRelations = {
  versionConsents?: TestCatalogVersionConsentPartialWithRelations[];
  labOrderConsents?: LabOrderConsentPartialWithRelations[];
  auditLogs?: ConsentAuditLogPartialWithRelations[];
};

export type ConsentTemplatePartialWithRelations = Omit<z.infer<typeof ConsentTemplatePartialSchema>, "formSchema"> & {
  formSchema?: JsonValueType | null;
} & ConsentTemplatePartialRelations

export const ConsentTemplatePartialWithRelationsSchema: z.ZodType<ConsentTemplatePartialWithRelations> = ConsentTemplatePartialSchema.merge(z.object({
  versionConsents: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).array(),
  labOrderConsents: z.lazy(() => LabOrderConsentPartialWithRelationsSchema).array(),
  auditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
})).partial()

export type ConsentTemplateWithPartialRelations = Omit<z.infer<typeof ConsentTemplateSchema>, "formSchema"> & {
  formSchema?: JsonValueType | null;
} & ConsentTemplatePartialRelations

export const ConsentTemplateWithPartialRelationsSchema: z.ZodType<ConsentTemplateWithPartialRelations> = ConsentTemplateSchema.merge(z.object({
  versionConsents: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).array(),
  labOrderConsents: z.lazy(() => LabOrderConsentPartialWithRelationsSchema).array(),
  auditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
}).partial())

export default ConsentTemplateSchema;
