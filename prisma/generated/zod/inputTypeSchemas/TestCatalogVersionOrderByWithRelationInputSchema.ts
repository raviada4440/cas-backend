import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionSpecimenOrderByRelationAggregateInputSchema } from './TestCatalogVersionSpecimenOrderByRelationAggregateInputSchema';
import { TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema } from './TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema';
import { TestCatalogVersionCptCodeOrderByRelationAggregateInputSchema } from './TestCatalogVersionCptCodeOrderByRelationAggregateInputSchema';
import { TestCatalogVersionOrderLoincOrderByRelationAggregateInputSchema } from './TestCatalogVersionOrderLoincOrderByRelationAggregateInputSchema';
import { TestCatalogVersionResultLoincOrderByRelationAggregateInputSchema } from './TestCatalogVersionResultLoincOrderByRelationAggregateInputSchema';
import { TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema } from './TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema';
import { TestCatalogVersionConsentOrderByRelationAggregateInputSchema } from './TestCatalogVersionConsentOrderByRelationAggregateInputSchema';
import { ConsentAuditLogOrderByRelationAggregateInputSchema } from './ConsentAuditLogOrderByRelationAggregateInputSchema';
import { LabOrderOrderByRelationAggregateInputSchema } from './LabOrderOrderByRelationAggregateInputSchema';
import { TestCatalogOrderByWithRelationInputSchema } from './TestCatalogOrderByWithRelationInputSchema';
import { TestCatalogApprovalOrderByRelationAggregateInputSchema } from './TestCatalogApprovalOrderByRelationAggregateInputSchema';
import { TestCatalogOrderByRelationAggregateInputSchema } from './TestCatalogOrderByRelationAggregateInputSchema';
import { TestCatalogConfigurationOrderByRelationAggregateInputSchema } from './TestCatalogConfigurationOrderByRelationAggregateInputSchema';
import { ReviewThreadOrderByRelationAggregateInputSchema } from './ReviewThreadOrderByRelationAggregateInputSchema';

export const TestCatalogVersionOrderByWithRelationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  effectiveDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  retiredDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  changeReason: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  changeNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternativeName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternativeName1: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternativeName2: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternativeName3: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternativeName4: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternativeName5: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testIncludes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  methodology: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testDescription: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  diseases: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  probes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalSignificance: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  diseaseIndications: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testUsage: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testLimitations: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isNewYorkApproved: z.lazy(() => SortOrderSchema).optional(),
  levelOfService: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  turnAroundTime: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  referenceRanges: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  setupSchedule: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testSubCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specialNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientResources: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  providerResources: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientResourcesUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  providerResourcesUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  additionalNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isFDAApproved: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  specimens: z.lazy(() => TestCatalogVersionSpecimenOrderByRelationAggregateInputSchema).optional(),
  biomarkers: z.lazy(() => TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema).optional(),
  cptCodes: z.lazy(() => TestCatalogVersionCptCodeOrderByRelationAggregateInputSchema).optional(),
  orderLoincs: z.lazy(() => TestCatalogVersionOrderLoincOrderByRelationAggregateInputSchema).optional(),
  resultLoincs: z.lazy(() => TestCatalogVersionResultLoincOrderByRelationAggregateInputSchema).optional(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema).optional(),
  consents: z.lazy(() => TestCatalogVersionConsentOrderByRelationAggregateInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogOrderByRelationAggregateInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderOrderByRelationAggregateInputSchema).optional(),
  test: z.lazy(() => TestCatalogOrderByWithRelationInputSchema).optional(),
  approvals: z.lazy(() => TestCatalogApprovalOrderByRelationAggregateInputSchema).optional(),
  defaultForTests: z.lazy(() => TestCatalogOrderByRelationAggregateInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationOrderByRelationAggregateInputSchema).optional(),
  reviewThreads: z.lazy(() => ReviewThreadOrderByRelationAggregateInputSchema).optional(),
});

export default TestCatalogVersionOrderByWithRelationInputSchema;
