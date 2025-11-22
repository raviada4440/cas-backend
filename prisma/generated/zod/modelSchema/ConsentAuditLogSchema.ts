import { z } from 'zod';
import { AuditActionSchema } from '../inputTypeSchemas/AuditActionSchema'
import { ConsentTemplateWithRelationsSchema, ConsentTemplatePartialWithRelationsSchema } from './ConsentTemplateSchema'
import type { ConsentTemplateWithRelations, ConsentTemplatePartialWithRelations } from './ConsentTemplateSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestCatalogVersionConsentWithRelationsSchema, TestCatalogVersionConsentPartialWithRelationsSchema } from './TestCatalogVersionConsentSchema'
import type { TestCatalogVersionConsentWithRelations, TestCatalogVersionConsentPartialWithRelations } from './TestCatalogVersionConsentSchema'

/////////////////////////////////////////
// CONSENT AUDIT LOG SCHEMA
/////////////////////////////////////////

export const ConsentAuditLogSchema = z.object({
  action: AuditActionSchema,
  id: z.string(),
  consentTemplateId: z.string().nullable(),
  testId: z.string().nullable(),
  versionId: z.string().nullable(),
  versionConsentId: z.string().nullable(),
  fieldName: z.string().nullable(),
  oldValue: z.string().nullable(),
  newValue: z.string().nullable(),
  changeReason: z.string().nullable(),
  performedBy: z.string().nullable(),
  performedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type ConsentAuditLog = z.infer<typeof ConsentAuditLogSchema>

/////////////////////////////////////////
// CONSENT AUDIT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const ConsentAuditLogPartialSchema = ConsentAuditLogSchema.partial()

export type ConsentAuditLogPartial = z.infer<typeof ConsentAuditLogPartialSchema>

/////////////////////////////////////////
// CONSENT AUDIT LOG RELATION SCHEMA
/////////////////////////////////////////

export type ConsentAuditLogRelations = {
  consentTemplate?: ConsentTemplateWithRelations | null;
  test?: TestCatalogWithRelations | null;
  version?: TestCatalogVersionWithRelations | null;
  versionConsent?: TestCatalogVersionConsentWithRelations | null;
};

export type ConsentAuditLogWithRelations = z.infer<typeof ConsentAuditLogSchema> & ConsentAuditLogRelations

export const ConsentAuditLogWithRelationsSchema: z.ZodType<ConsentAuditLogWithRelations> = ConsentAuditLogSchema.merge(z.object({
  consentTemplate: z.lazy(() => ConsentTemplateWithRelationsSchema).nullable(),
  test: z.lazy(() => TestCatalogWithRelationsSchema).nullable(),
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema).nullable(),
  versionConsent: z.lazy(() => TestCatalogVersionConsentWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// CONSENT AUDIT LOG PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ConsentAuditLogPartialRelations = {
  consentTemplate?: ConsentTemplatePartialWithRelations | null;
  test?: TestCatalogPartialWithRelations | null;
  version?: TestCatalogVersionPartialWithRelations | null;
  versionConsent?: TestCatalogVersionConsentPartialWithRelations | null;
};

export type ConsentAuditLogPartialWithRelations = z.infer<typeof ConsentAuditLogPartialSchema> & ConsentAuditLogPartialRelations

export const ConsentAuditLogPartialWithRelationsSchema: z.ZodType<ConsentAuditLogPartialWithRelations> = ConsentAuditLogPartialSchema.merge(z.object({
  consentTemplate: z.lazy(() => ConsentTemplatePartialWithRelationsSchema).nullable(),
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  versionConsent: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).nullable(),
})).partial()

export type ConsentAuditLogWithPartialRelations = z.infer<typeof ConsentAuditLogSchema> & ConsentAuditLogPartialRelations

export const ConsentAuditLogWithPartialRelationsSchema: z.ZodType<ConsentAuditLogWithPartialRelations> = ConsentAuditLogSchema.merge(z.object({
  consentTemplate: z.lazy(() => ConsentTemplatePartialWithRelationsSchema).nullable(),
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  versionConsent: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).nullable(),
}).partial())

export default ConsentAuditLogSchema;
