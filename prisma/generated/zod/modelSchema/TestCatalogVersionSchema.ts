import { z } from 'zod';
import { TestCatalogVersionStatusSchema } from '../inputTypeSchemas/TestCatalogVersionStatusSchema'
import { TestCatalogVersionSpecimenWithRelationsSchema, TestCatalogVersionSpecimenPartialWithRelationsSchema } from './TestCatalogVersionSpecimenSchema'
import type { TestCatalogVersionSpecimenWithRelations, TestCatalogVersionSpecimenPartialWithRelations } from './TestCatalogVersionSpecimenSchema'
import { TestCatalogVersionBiomarkerWithRelationsSchema, TestCatalogVersionBiomarkerPartialWithRelationsSchema } from './TestCatalogVersionBiomarkerSchema'
import type { TestCatalogVersionBiomarkerWithRelations, TestCatalogVersionBiomarkerPartialWithRelations } from './TestCatalogVersionBiomarkerSchema'
import { TestCatalogVersionCptCodeWithRelationsSchema, TestCatalogVersionCptCodePartialWithRelationsSchema } from './TestCatalogVersionCptCodeSchema'
import type { TestCatalogVersionCptCodeWithRelations, TestCatalogVersionCptCodePartialWithRelations } from './TestCatalogVersionCptCodeSchema'
import { TestCatalogVersionOrderLoincWithRelationsSchema, TestCatalogVersionOrderLoincPartialWithRelationsSchema } from './TestCatalogVersionOrderLoincSchema'
import type { TestCatalogVersionOrderLoincWithRelations, TestCatalogVersionOrderLoincPartialWithRelations } from './TestCatalogVersionOrderLoincSchema'
import { TestCatalogVersionResultLoincWithRelationsSchema, TestCatalogVersionResultLoincPartialWithRelationsSchema } from './TestCatalogVersionResultLoincSchema'
import type { TestCatalogVersionResultLoincWithRelations, TestCatalogVersionResultLoincPartialWithRelations } from './TestCatalogVersionResultLoincSchema'
import { TestCatalogVersionOrderFormWithRelationsSchema, TestCatalogVersionOrderFormPartialWithRelationsSchema } from './TestCatalogVersionOrderFormSchema'
import type { TestCatalogVersionOrderFormWithRelations, TestCatalogVersionOrderFormPartialWithRelations } from './TestCatalogVersionOrderFormSchema'
import { TestCatalogVersionConsentWithRelationsSchema, TestCatalogVersionConsentPartialWithRelationsSchema } from './TestCatalogVersionConsentSchema'
import type { TestCatalogVersionConsentWithRelations, TestCatalogVersionConsentPartialWithRelations } from './TestCatalogVersionConsentSchema'
import { ConsentAuditLogWithRelationsSchema, ConsentAuditLogPartialWithRelationsSchema } from './ConsentAuditLogSchema'
import type { ConsentAuditLogWithRelations, ConsentAuditLogPartialWithRelations } from './ConsentAuditLogSchema'
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'
import { TestCatalogApprovalWithRelationsSchema, TestCatalogApprovalPartialWithRelationsSchema } from './TestCatalogApprovalSchema'
import type { TestCatalogApprovalWithRelations, TestCatalogApprovalPartialWithRelations } from './TestCatalogApprovalSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { ReviewThreadWithRelationsSchema, ReviewThreadPartialWithRelationsSchema } from './ReviewThreadSchema'
import type { ReviewThreadWithRelations, ReviewThreadPartialWithRelations } from './ReviewThreadSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionSchema = z.object({
  status: TestCatalogVersionStatusSchema,
  id: z.string(),
  testId: z.string(),
  versionNumber: z.number(),
  effectiveDate: z.date().nullable(),
  retiredDate: z.date().nullable(),
  changeReason: z.string().nullable(),
  changeNotes: z.string().nullable(),
  href: z.string().nullable(),
  testName: z.string().nullable(),
  alternativeName: z.string().nullable(),
  alternativeName1: z.string().nullable(),
  alternativeName2: z.string().nullable(),
  alternativeName3: z.string().nullable(),
  alternativeName4: z.string().nullable(),
  alternativeName5: z.string().nullable(),
  testIncludes: z.string().nullable(),
  methodology: z.string().nullable(),
  testDescription: z.string().nullable(),
  diseases: z.string().nullable(),
  probes: z.string().nullable(),
  clinicalSignificance: z.string().nullable(),
  diseaseIndications: z.string().nullable(),
  testUsage: z.string().nullable(),
  testLimitations: z.string().nullable(),
  isNewYorkApproved: z.boolean(),
  levelOfService: z.string().nullable(),
  turnAroundTime: z.string().nullable(),
  referenceRanges: z.string().nullable(),
  setupSchedule: z.string().nullable(),
  testCategory: z.string().nullable(),
  testSubCategory: z.string().nullable(),
  specialNotes: z.string().nullable(),
  patientResources: z.string().nullable(),
  providerResources: z.string().nullable(),
  patientResourcesUrl: z.string().nullable(),
  providerResourcesUrl: z.string().nullable(),
  additionalNotes: z.string().nullable(),
  isFDAApproved: z.boolean(),
  createdBy: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersion = z.infer<typeof TestCatalogVersionSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionPartialSchema = TestCatalogVersionSchema.partial()

export type TestCatalogVersionPartial = z.infer<typeof TestCatalogVersionPartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionRelations = {
  specimens: TestCatalogVersionSpecimenWithRelations[];
  biomarkers: TestCatalogVersionBiomarkerWithRelations[];
  cptCodes: TestCatalogVersionCptCodeWithRelations[];
  orderLoincs: TestCatalogVersionOrderLoincWithRelations[];
  resultLoincs: TestCatalogVersionResultLoincWithRelations[];
  orderForms: TestCatalogVersionOrderFormWithRelations[];
  consents: TestCatalogVersionConsentWithRelations[];
  consentAuditLogs: ConsentAuditLogWithRelations[];
  labOrders: LabOrderWithRelations[];
  test: TestCatalogWithRelations;
  approvals: TestCatalogApprovalWithRelations[];
  defaultForTests: TestCatalogWithRelations[];
  configurations: TestCatalogConfigurationWithRelations[];
  reviewThreads: ReviewThreadWithRelations[];
};

export type TestCatalogVersionWithRelations = z.infer<typeof TestCatalogVersionSchema> & TestCatalogVersionRelations

export const TestCatalogVersionWithRelationsSchema: z.ZodType<TestCatalogVersionWithRelations> = TestCatalogVersionSchema.merge(z.object({
  specimens: z.lazy(() => TestCatalogVersionSpecimenWithRelationsSchema).array(),
  biomarkers: z.lazy(() => TestCatalogVersionBiomarkerWithRelationsSchema).array(),
  cptCodes: z.lazy(() => TestCatalogVersionCptCodeWithRelationsSchema).array(),
  orderLoincs: z.lazy(() => TestCatalogVersionOrderLoincWithRelationsSchema).array(),
  resultLoincs: z.lazy(() => TestCatalogVersionResultLoincWithRelationsSchema).array(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormWithRelationsSchema).array(),
  consents: z.lazy(() => TestCatalogVersionConsentWithRelationsSchema).array(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderWithRelationsSchema).array(),
  test: z.lazy(() => TestCatalogWithRelationsSchema),
  approvals: z.lazy(() => TestCatalogApprovalWithRelationsSchema).array(),
  defaultForTests: z.lazy(() => TestCatalogWithRelationsSchema).array(),
  configurations: z.lazy(() => TestCatalogConfigurationWithRelationsSchema).array(),
  reviewThreads: z.lazy(() => ReviewThreadWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionPartialRelations = {
  specimens?: TestCatalogVersionSpecimenPartialWithRelations[];
  biomarkers?: TestCatalogVersionBiomarkerPartialWithRelations[];
  cptCodes?: TestCatalogVersionCptCodePartialWithRelations[];
  orderLoincs?: TestCatalogVersionOrderLoincPartialWithRelations[];
  resultLoincs?: TestCatalogVersionResultLoincPartialWithRelations[];
  orderForms?: TestCatalogVersionOrderFormPartialWithRelations[];
  consents?: TestCatalogVersionConsentPartialWithRelations[];
  consentAuditLogs?: ConsentAuditLogPartialWithRelations[];
  labOrders?: LabOrderPartialWithRelations[];
  test?: TestCatalogPartialWithRelations;
  approvals?: TestCatalogApprovalPartialWithRelations[];
  defaultForTests?: TestCatalogPartialWithRelations[];
  configurations?: TestCatalogConfigurationPartialWithRelations[];
  reviewThreads?: ReviewThreadPartialWithRelations[];
};

export type TestCatalogVersionPartialWithRelations = z.infer<typeof TestCatalogVersionPartialSchema> & TestCatalogVersionPartialRelations

export const TestCatalogVersionPartialWithRelationsSchema: z.ZodType<TestCatalogVersionPartialWithRelations> = TestCatalogVersionPartialSchema.merge(z.object({
  specimens: z.lazy(() => TestCatalogVersionSpecimenPartialWithRelationsSchema).array(),
  biomarkers: z.lazy(() => TestCatalogVersionBiomarkerPartialWithRelationsSchema).array(),
  cptCodes: z.lazy(() => TestCatalogVersionCptCodePartialWithRelationsSchema).array(),
  orderLoincs: z.lazy(() => TestCatalogVersionOrderLoincPartialWithRelationsSchema).array(),
  resultLoincs: z.lazy(() => TestCatalogVersionResultLoincPartialWithRelationsSchema).array(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).array(),
  consents: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).array(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema),
  approvals: z.lazy(() => TestCatalogApprovalPartialWithRelationsSchema).array(),
  defaultForTests: z.lazy(() => TestCatalogPartialWithRelationsSchema).array(),
  configurations: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).array(),
  reviewThreads: z.lazy(() => ReviewThreadPartialWithRelationsSchema).array(),
})).partial()

export type TestCatalogVersionWithPartialRelations = z.infer<typeof TestCatalogVersionSchema> & TestCatalogVersionPartialRelations

export const TestCatalogVersionWithPartialRelationsSchema: z.ZodType<TestCatalogVersionWithPartialRelations> = TestCatalogVersionSchema.merge(z.object({
  specimens: z.lazy(() => TestCatalogVersionSpecimenPartialWithRelationsSchema).array(),
  biomarkers: z.lazy(() => TestCatalogVersionBiomarkerPartialWithRelationsSchema).array(),
  cptCodes: z.lazy(() => TestCatalogVersionCptCodePartialWithRelationsSchema).array(),
  orderLoincs: z.lazy(() => TestCatalogVersionOrderLoincPartialWithRelationsSchema).array(),
  resultLoincs: z.lazy(() => TestCatalogVersionResultLoincPartialWithRelationsSchema).array(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormPartialWithRelationsSchema).array(),
  consents: z.lazy(() => TestCatalogVersionConsentPartialWithRelationsSchema).array(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
  test: z.lazy(() => TestCatalogPartialWithRelationsSchema),
  approvals: z.lazy(() => TestCatalogApprovalPartialWithRelationsSchema).array(),
  defaultForTests: z.lazy(() => TestCatalogPartialWithRelationsSchema).array(),
  configurations: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).array(),
  reviewThreads: z.lazy(() => ReviewThreadPartialWithRelationsSchema).array(),
}).partial())

export default TestCatalogVersionSchema;
