import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { TestCatalogConfigurationTypeSchema } from '../inputTypeSchemas/TestCatalogConfigurationTypeSchema'
import { VariantDimensionSchema } from '../inputTypeSchemas/VariantDimensionSchema'
import { TestCatalogConfigurationStatusSchema } from '../inputTypeSchemas/TestCatalogConfigurationStatusSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestCatalogVersionConsentWithRelationsSchema, TestCatalogVersionConsentPartialWithRelationsSchema } from './TestCatalogVersionConsentSchema'
import type { TestCatalogVersionConsentWithRelations, TestCatalogVersionConsentPartialWithRelations } from './TestCatalogVersionConsentSchema'
import { TestCatalogApprovalWithRelationsSchema, TestCatalogApprovalPartialWithRelationsSchema } from './TestCatalogApprovalSchema'
import type { TestCatalogApprovalWithRelations, TestCatalogApprovalPartialWithRelations } from './TestCatalogApprovalSchema'
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { TestConfigCptCodeWithRelationsSchema, TestConfigCptCodePartialWithRelationsSchema } from './TestConfigCptCodeSchema'
import type { TestConfigCptCodeWithRelations, TestConfigCptCodePartialWithRelations } from './TestConfigCptCodeSchema'
import { TestConfigOrderLoincWithRelationsSchema, TestConfigOrderLoincPartialWithRelationsSchema } from './TestConfigOrderLoincSchema'
import type { TestConfigOrderLoincWithRelations, TestConfigOrderLoincPartialWithRelations } from './TestConfigOrderLoincSchema'
import { TestConfigResultLoincWithRelationsSchema, TestConfigResultLoincPartialWithRelationsSchema } from './TestConfigResultLoincSchema'
import type { TestConfigResultLoincWithRelations, TestConfigResultLoincPartialWithRelations } from './TestConfigResultLoincSchema'
import { TestConfigSpecimenManifestWithRelationsSchema, TestConfigSpecimenManifestPartialWithRelationsSchema } from './TestConfigSpecimenManifestSchema'
import type { TestConfigSpecimenManifestWithRelations, TestConfigSpecimenManifestPartialWithRelations } from './TestConfigSpecimenManifestSchema'
import { TestConfigBiomarkerWithRelationsSchema, TestConfigBiomarkerPartialWithRelationsSchema } from './TestConfigBiomarkerSchema'
import type { TestConfigBiomarkerWithRelations, TestConfigBiomarkerPartialWithRelations } from './TestConfigBiomarkerSchema'
import { TestCatalogVersionOrderFormWithRelationsSchema, TestCatalogVersionOrderFormPartialWithRelationsSchema } from './TestCatalogVersionOrderFormSchema'
import type { TestCatalogVersionOrderFormWithRelations, TestCatalogVersionOrderFormPartialWithRelations } from './TestCatalogVersionOrderFormSchema'

/////////////////////////////////////////
// TEST CATALOG CONFIGURATION SCHEMA
/////////////////////////////////////////

export const TestCatalogConfigurationSchema = z.object({
  type: TestCatalogConfigurationTypeSchema,
  dimension: VariantDimensionSchema,
  status: TestCatalogConfigurationStatusSchema,
  id: z.string(),
  testId: z.string(),
  versionId: z.string().nullable(),
  configurationName: z.string(),
  versionNumber: z.number(),
  customerId: z.string().nullable(),
  organizationId: z.string().nullable(),
  dimensionValue: z.string(),
  operationalCode: z.string().nullable(),
  isDefault: z.boolean(),
  isActive: z.boolean(),
  customTestName: z.string().nullable(),
  customDescription: z.string().nullable(),
  customTurnAroundTime: z.string().nullable(),
  customPricing: z.instanceof(Prisma.Decimal, { message: "Field 'customPricing' must be a Decimal. Location: ['Models', 'TestCatalogConfiguration']"}).nullable(),
  customInstructions: z.string().nullable(),
  customSpecimenRequirements: z.string().nullable(),
  customCollectionMethod: z.string().nullable(),
  effectiveDate: z.date().nullable(),
  expirationDate: z.date().nullable(),
  lastActivatedAt: z.date().nullable(),
  lastDeactivatedAt: z.date().nullable(),
  requiresConsent: z.boolean(),
  consentTemplateIds: z.string().array(),
  customConsentText: z.string().nullable(),
  requiresApproval: z.boolean(),
  approvalWorkflowId: z.string().nullable(),
  approvedBy: z.string().nullable(),
  approvedAt: z.date().nullable(),
  createdBy: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogConfiguration = z.infer<typeof TestCatalogConfigurationSchema>

/////////////////////////////////////////
// TEST CATALOG CONFIGURATION PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogConfigurationPartialSchema = TestCatalogConfigurationSchema.partial()

export type TestCatalogConfigurationPartial = z.infer<typeof TestCatalogConfigurationPartialSchema>

/////////////////////////////////////////
// TEST CATALOG CONFIGURATION RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogConfigurationRelations = {
  test: TestCatalogWithRelations;
  version?: TestCatalogVersionWithRelations | null;
  consents: TestCatalogVersionConsentWithRelations[];
  approvals: TestCatalogApprovalWithRelations[];
  labOrders: LabOrderWithRelations[];
  cptOverrides: TestConfigCptCodeWithRelations[];
  orderLoincOverrides: TestConfigOrderLoincWithRelations[];
  resultLoincOverrides: TestConfigResultLoincWithRelations[];
  specimenManifestEntries: TestConfigSpecimenManifestWithRelations[];
  biomarkerOverrides: TestConfigBiomarkerWithRelations[];
  orderForms: TestCatalogVersionOrderFormWithRelations[];
};

export type TestCatalogConfigurationWithRelations = z.infer<typeof TestCatalogConfigurationSchema> & TestCatalogConfigurationRelations

export const TestCatalogConfigurationWithRelationsSchema: z.ZodType<TestCatalogConfigurationWithRelations> = TestCatalogConfigurationSchema.merge(z.object({
  test: z.lazy(() => TestCatalogWithRelationsSchema),
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema).nullable(),
  consents: z.lazy(() => TestCatalogVersionConsentWithRelationsSchema).array(),
  approvals: z.lazy(() => TestCatalogApprovalWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderWithRelationsSchema).array(),
  cptOverrides: z.lazy(() => TestConfigCptCodeWithRelationsSchema).array(),
  orderLoincOverrides: z.lazy(() => TestConfigOrderLoincWithRelationsSchema).array(),
  resultLoincOverrides: z.lazy(() => TestConfigResultLoincWithRelationsSchema).array(),
  specimenManifestEntries: z.lazy(() => TestConfigSpecimenManifestWithRelationsSchema).array(),
  biomarkerOverrides: z.lazy(() => TestConfigBiomarkerWithRelationsSchema).array(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TEST CATALOG CONFIGURATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogConfigurationPartialRelations = {
  test?: TestCatalogPartialWithRelations;
  version?: TestCatalogVersionPartialWithRelations | null;
  consents?: TestCatalogVersionConsentPartialWithRelations[];
  approvals?: TestCatalogApprovalPartialWithRelations[];
  labOrders?: LabOrderPartialWithRelations[];
  cptOverrides?: TestConfigCptCodePartialWithRelations[];
  orderLoincOverrides?: TestConfigOrderLoincPartialWithRelations[];
  resultLoincOverrides?: TestConfigResultLoincPartialWithRelations[];
  specimenManifestEntries?: TestConfigSpecimenManifestPartialWithRelations[];
  biomarkerOverrides?: TestConfigBiomarkerPartialWithRelations[];
  orderForms?: TestCatalogVersionOrderFormPartialWithRelations[];
};

export type TestCatalogConfigurationPartialWithRelations = z.infer<typeof TestCatalogConfigurationPartialSchema> & TestCatalogConfigurationPartialRelations

export const TestCatalogConfigurationPartialWithRelationsSchema: z.ZodType<TestCatalogConfigurationPartialWithRelations> = TestCatalogConfigurationPartialSchema.merge(z.object({
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema),
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  consents: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).array(),
  approvals: z.lazy(() => TestCatalogApprovalPartialWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  cptOverrides: z.lazy(() => TestConfigCptCodePartialWithRelationsSchema).array(),
  orderLoincOverrides: z.lazy(() => TestConfigOrderLoincPartialWithRelationsSchema).array(),
  resultLoincOverrides: z.lazy(() => TestConfigResultLoincPartialWithRelationsSchema).array(),
  specimenManifestEntries: z.lazy(() => TestConfigSpecimenManifestPartialWithRelationsSchema).array(),
  biomarkerOverrides: z.lazy(() => TestConfigBiomarkerPartialWithRelationsSchema).array(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).array(),
})).partial()

export type TestCatalogConfigurationWithPartialRelations = z.infer<typeof TestCatalogConfigurationSchema> & TestCatalogConfigurationPartialRelations

export const TestCatalogConfigurationWithPartialRelationsSchema: z.ZodType<TestCatalogConfigurationWithPartialRelations> = TestCatalogConfigurationSchema.merge(z.object({
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema),
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  consents: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).array(),
  approvals: z.lazy(() => TestCatalogApprovalPartialWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  cptOverrides: z.lazy(() => TestConfigCptCodePartialWithRelationsSchema).array(),
  orderLoincOverrides: z.lazy(() => TestConfigOrderLoincPartialWithRelationsSchema).array(),
  resultLoincOverrides: z.lazy(() => TestConfigResultLoincPartialWithRelationsSchema).array(),
  specimenManifestEntries: z.lazy(() => TestConfigSpecimenManifestPartialWithRelationsSchema).array(),
  biomarkerOverrides: z.lazy(() => TestConfigBiomarkerPartialWithRelationsSchema).array(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).array(),
}).partial())

export default TestCatalogConfigurationSchema;
