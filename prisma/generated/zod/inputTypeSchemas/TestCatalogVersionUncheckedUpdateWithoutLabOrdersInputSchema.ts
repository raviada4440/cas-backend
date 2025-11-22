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
import { TestCatalogVersionSpecimenUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionSpecimenUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionResultLoincUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionResultLoincUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { ConsentAuditLogUncheckedUpdateManyWithoutVersionNestedInputSchema } from './ConsentAuditLogUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogApprovalUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogApprovalUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { TestCatalogUncheckedUpdateManyWithoutDefaultVersionNestedInputSchema } from './TestCatalogUncheckedUpdateManyWithoutDefaultVersionNestedInputSchema';
import { TestCatalogConfigurationUncheckedUpdateManyWithoutVersionNestedInputSchema } from './TestCatalogConfigurationUncheckedUpdateManyWithoutVersionNestedInputSchema';
import { ReviewThreadUncheckedUpdateManyWithoutVersionNestedInputSchema } from './ReviewThreadUncheckedUpdateManyWithoutVersionNestedInputSchema';

export const TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogVersionUncheckedUpdateWithoutLabOrdersInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  testId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  specimens: z.lazy(() => TestCatalogVersionSpecimenUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  biomarkers: z.lazy(() => TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  cptCodes: z.lazy(() => TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  orderLoincs: z.lazy(() => TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  resultLoincs: z.lazy(() => TestCatalogVersionResultLoincUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  consents: z.lazy(() => TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  approvals: z.lazy(() => TestCatalogApprovalUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  defaultForTests: z.lazy(() => TestCatalogUncheckedUpdateManyWithoutDefaultVersionNestedInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
  reviewThreads: z.lazy(() => ReviewThreadUncheckedUpdateManyWithoutVersionNestedInputSchema).optional(),
});

export default TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema;
