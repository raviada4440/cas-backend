import { z } from 'zod';
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { ConsentTemplateWithRelationsSchema, ConsentTemplatePartialWithRelationsSchema } from './ConsentTemplateSchema'
import type { ConsentTemplateWithRelations, ConsentTemplatePartialWithRelations } from './ConsentTemplateSchema'
import { LabOrderConsentWithRelationsSchema, LabOrderConsentPartialWithRelationsSchema } from './LabOrderConsentSchema'
import type { LabOrderConsentWithRelations, LabOrderConsentPartialWithRelations } from './LabOrderConsentSchema'
import { ConsentAuditLogWithRelationsSchema, ConsentAuditLogPartialWithRelationsSchema } from './ConsentAuditLogSchema'
import type { ConsentAuditLogWithRelations, ConsentAuditLogPartialWithRelations } from './ConsentAuditLogSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION CONSENT SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionConsentSchema = z.object({
  id: z.string(),
  versionId: z.string(),
  configurationId: z.string().nullable(),
  consentTemplateId: z.string(),
  isRequired: z.boolean(),
  displayOrder: z.number(),
  customTitle: z.string().nullable(),
  customContent: z.string().nullable(),
  conditionalLogic: z.string().nullable(),
  dependsOnConsent: z.string().nullable(),
  createdBy: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersionConsent = z.infer<typeof TestCatalogVersionConsentSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION CONSENT PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionConsentPartialSchema = TestCatalogVersionConsentSchema.partial()

export type TestCatalogVersionConsentPartial = z.infer<typeof TestCatalogVersionConsentPartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION CONSENT RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionConsentRelations = {
  version: TestCatalogVersionWithRelations;
  configuration?: TestCatalogConfigurationWithRelations | null;
  consentTemplate: ConsentTemplateWithRelations;
  labOrderConsents: LabOrderConsentWithRelations[];
  auditLogs: ConsentAuditLogWithRelations[];
};

export type TestCatalogVersionConsentWithRelations = z.infer<typeof TestCatalogVersionConsentSchema> & TestCatalogVersionConsentRelations

export const TestCatalogVersionConsentWithRelationsSchema: z.ZodType<TestCatalogVersionConsentWithRelations> = TestCatalogVersionConsentSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema).nullable(),
  consentTemplate: z.lazy(() => ConsentTemplateWithRelationsSchema),
  labOrderConsents: z.lazy(() => LabOrderConsentWithRelationsSchema).array(),
  auditLogs: z.lazy(() => ConsentAuditLogWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION CONSENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionConsentPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
  configuration?: TestCatalogConfigurationPartialWithRelations | null;
  consentTemplate?: ConsentTemplatePartialWithRelations;
  labOrderConsents?: LabOrderConsentPartialWithRelations[];
  auditLogs?: ConsentAuditLogPartialWithRelations[];
};

export type TestCatalogVersionConsentPartialWithRelations = z.infer<typeof TestCatalogVersionConsentPartialSchema> & TestCatalogVersionConsentPartialRelations

export const TestCatalogVersionConsentPartialWithRelationsSchema: z.ZodType<TestCatalogVersionConsentPartialWithRelations> = TestCatalogVersionConsentPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).nullable(),
  consentTemplate: z.lazy(() => ConsentTemplatePartialWithRelationsSchema),
  labOrderConsents: z.lazy(() => LabOrderConsentPartialWithRelationsSchema).array(),
  auditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
})).partial()

export type TestCatalogVersionConsentWithPartialRelations = z.infer<typeof TestCatalogVersionConsentSchema> & TestCatalogVersionConsentPartialRelations

export const TestCatalogVersionConsentWithPartialRelationsSchema: z.ZodType<TestCatalogVersionConsentWithPartialRelations> = TestCatalogVersionConsentSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).nullable(),
  consentTemplate: z.lazy(() => ConsentTemplatePartialWithRelationsSchema),
  labOrderConsents: z.lazy(() => LabOrderConsentPartialWithRelationsSchema).array(),
  auditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
}).partial())

export default TestCatalogVersionConsentSchema;
