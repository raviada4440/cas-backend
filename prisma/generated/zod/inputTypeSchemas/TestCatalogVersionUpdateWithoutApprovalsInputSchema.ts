import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TestCatalogVersionStatusSchema } from './TestCatalogVersionStatusSchema';
import { EnumTestCatalogVersionStatusFieldUpdateOperationsInputSchema } from './EnumTestCatalogVersionStatusFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionSpecimenUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionSpecimenUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionBiomarkerUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionBiomarkerUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionCptCodeUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionCptCodeUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionOrderLoincUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionOrderLoincUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionResultLoincUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionResultLoincUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionOrderFormUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionOrderFormUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionConsentUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionConsentUpdateManyWithoutVersionNestedInputSchema';
import { ConsentAuditLogUpdateManyWithoutVersionNestedInputSchema } from './ConsentAuditLogUpdateManyWithoutVersionNestedInputSchema';
import { LabOrderUpdateManyWithoutVersionNestedInputSchema } from './LabOrderUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogUpdateOneRequiredWithoutVersionsNestedInputSchema } from './TestCatalogUpdateOneRequiredWithoutVersionsNestedInputSchema';
import { TestCatalogUpdateManyWithoutDefaultVersionNestedInputSchema } from './TestCatalogUpdateManyWithoutDefaultVersionNestedInputSchema';
import { TestCatalogConfigurationUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogConfigurationUpdateManyWithoutVersionNestedInputSchema';
import { ReviewThreadUpdateManyWithoutVersionNestedInputSchema } from './ReviewThreadUpdateManyWithoutVersionNestedInputSchema';

export const TestCatalogVersionUpdateWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateWithoutApprovalsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  versionNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TestCatalogVersionStatusSchema), z.lazy(() => EnumTestCatalogVersionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  effectiveDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  retiredDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changeNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  diseaseIndications: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isNewYorkApproved: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  levelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  referenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  setupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testSubCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specialNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientResources: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerResources: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientResourcesUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerResourcesUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  additionalNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isFDAApproved: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  specimens: z.lazy(() => TestCatalogVersionSpecimenUpdateManyWithoutVersionNestedInputSchema).optional(),
  biomarkers: z.lazy(() => TestCatalogVersionBiomarkerUpdateManyWithoutVersionNestedInputSchema).optional(),
  cptCodes: z.lazy(() => TestCatalogVersionCptCodeUpdateManyWithoutVersionNestedInputSchema).optional(),
  orderLoincs: z.lazy(() => TestCatalogVersionOrderLoincUpdateManyWithoutVersionNestedInputSchema).optional(),
  resultLoincs: z.lazy(() => TestCatalogVersionResultLoincUpdateManyWithoutVersionNestedInputSchema).optional(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithoutVersionNestedInputSchema).optional(),
  consents: z.lazy(() => TestCatalogVersionConsentUpdateManyWithoutVersionNestedInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogUpdateManyWithoutVersionNestedInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderUpdateManyWithoutVersionNestedInputSchema).optional(),
  test: z.lazy(() => TestCatalogUpdateOneRequiredWithoutVersionsNestedInputSchema).optional(),
  defaultForTests: z.lazy(() => TestCatalogUpdateManyWithoutDefaultVersionNestedInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationUpdateManyWithoutVersionNestedInputSchema).optional(),
  reviewThreads: z.lazy(() => ReviewThreadUpdateManyWithoutVersionNestedInputSchema).optional(),
});

export default TestCatalogVersionUpdateWithoutApprovalsInputSchema;
