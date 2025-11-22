import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionStatusSchema } from './TestCatalogVersionStatusSchema';
import { TestCatalogVersionSpecimenCreateNestedManyWithoutVersionInputSchema } from './TestCatalogVersionSpecimenCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerCreateNestedManyWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeCreateNestedManyWithoutVersionInputSchema } from './TestCatalogVersionCptCodeCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincCreateNestedManyWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincCreateNestedManyWithoutVersionInputSchema } from './TestCatalogVersionResultLoincCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormCreateNestedManyWithoutVersionInputSchema } from './TestCatalogVersionOrderFormCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogVersionConsentCreateNestedManyWithoutVersionInputSchema } from './TestCatalogVersionConsentCreateNestedManyWithoutVersionInputSchema';
import { ConsentAuditLogCreateNestedManyWithoutVersionInputSchema } from './ConsentAuditLogCreateNestedManyWithoutVersionInputSchema';
import { LabOrderCreateNestedManyWithoutVersionInputSchema } from './LabOrderCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogApprovalCreateNestedManyWithoutVersionInputSchema } from './TestCatalogApprovalCreateNestedManyWithoutVersionInputSchema';
import { TestCatalogCreateNestedManyWithoutDefaultVersionInputSchema } from './TestCatalogCreateNestedManyWithoutDefaultVersionInputSchema';
import { TestCatalogConfigurationCreateNestedManyWithoutVersionInputSchema } from './TestCatalogConfigurationCreateNestedManyWithoutVersionInputSchema';
import { ReviewThreadCreateNestedManyWithoutVersionInputSchema } from './ReviewThreadCreateNestedManyWithoutVersionInputSchema';

export const TestCatalogVersionCreateWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateWithoutTestInput> = z.strictObject({
  id: z.string().optional(),
  versionNumber: z.number(),
  status: z.lazy(() => TestCatalogVersionStatusSchema).optional(),
  effectiveDate: z.date().optional().nullable(),
  retiredDate: z.date().optional().nullable(),
  changeReason: z.string().optional().nullable(),
  changeNotes: z.string().optional().nullable(),
  href: z.string().optional().nullable(),
  testName: z.string().optional().nullable(),
  alternativeName: z.string().optional().nullable(),
  alternativeName1: z.string().optional().nullable(),
  alternativeName2: z.string().optional().nullable(),
  alternativeName3: z.string().optional().nullable(),
  alternativeName4: z.string().optional().nullable(),
  alternativeName5: z.string().optional().nullable(),
  testIncludes: z.string().optional().nullable(),
  methodology: z.string().optional().nullable(),
  testDescription: z.string().optional().nullable(),
  diseases: z.string().optional().nullable(),
  probes: z.string().optional().nullable(),
  clinicalSignificance: z.string().optional().nullable(),
  diseaseIndications: z.string().optional().nullable(),
  testUsage: z.string().optional().nullable(),
  testLimitations: z.string().optional().nullable(),
  isNewYorkApproved: z.boolean().optional(),
  levelOfService: z.string().optional().nullable(),
  turnAroundTime: z.string().optional().nullable(),
  referenceRanges: z.string().optional().nullable(),
  setupSchedule: z.string().optional().nullable(),
  testCategory: z.string().optional().nullable(),
  testSubCategory: z.string().optional().nullable(),
  specialNotes: z.string().optional().nullable(),
  patientResources: z.string().optional().nullable(),
  providerResources: z.string().optional().nullable(),
  patientResourcesUrl: z.string().optional().nullable(),
  providerResourcesUrl: z.string().optional().nullable(),
  additionalNotes: z.string().optional().nullable(),
  isFDAApproved: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  specimens: z.lazy(() => TestCatalogVersionSpecimenCreateNestedManyWithoutVersionInputSchema).optional(),
  biomarkers: z.lazy(() => TestCatalogVersionBiomarkerCreateNestedManyWithoutVersionInputSchema).optional(),
  cptCodes: z.lazy(() => TestCatalogVersionCptCodeCreateNestedManyWithoutVersionInputSchema).optional(),
  orderLoincs: z.lazy(() => TestCatalogVersionOrderLoincCreateNestedManyWithoutVersionInputSchema).optional(),
  resultLoincs: z.lazy(() => TestCatalogVersionResultLoincCreateNestedManyWithoutVersionInputSchema).optional(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormCreateNestedManyWithoutVersionInputSchema).optional(),
  consents: z.lazy(() => TestCatalogVersionConsentCreateNestedManyWithoutVersionInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogCreateNestedManyWithoutVersionInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderCreateNestedManyWithoutVersionInputSchema).optional(),
  approvals: z.lazy(() => TestCatalogApprovalCreateNestedManyWithoutVersionInputSchema).optional(),
  defaultForTests: z.lazy(() => TestCatalogCreateNestedManyWithoutDefaultVersionInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationCreateNestedManyWithoutVersionInputSchema).optional(),
  reviewThreads: z.lazy(() => ReviewThreadCreateNestedManyWithoutVersionInputSchema).optional(),
});

export default TestCatalogVersionCreateWithoutTestInputSchema;
