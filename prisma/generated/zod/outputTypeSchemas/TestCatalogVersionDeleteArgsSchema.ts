import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionIncludeSchema'
import { TestCatalogVersionWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionWhereUniqueInputSchema'
import { TestCatalogVersionSpecimenFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionSpecimenFindManyArgsSchema"
import { TestCatalogVersionBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionBiomarkerFindManyArgsSchema"
import { TestCatalogVersionCptCodeFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionCptCodeFindManyArgsSchema"
import { TestCatalogVersionOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderLoincFindManyArgsSchema"
import { TestCatalogVersionResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionResultLoincFindManyArgsSchema"
import { TestCatalogVersionOrderFormFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormFindManyArgsSchema"
import { TestCatalogVersionConsentFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentFindManyArgsSchema"
import { ConsentAuditLogFindManyArgsSchema } from "../outputTypeSchemas/ConsentAuditLogFindManyArgsSchema"
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { TestCatalogApprovalFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogApprovalFindManyArgsSchema"
import { TestCatalogFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogFindManyArgsSchema"
import { TestCatalogConfigurationFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationFindManyArgsSchema"
import { ReviewThreadFindManyArgsSchema } from "../outputTypeSchemas/ReviewThreadFindManyArgsSchema"
import { TestCatalogVersionCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogVersionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogVersionSelectSchema: z.ZodType<Prisma.TestCatalogVersionSelect> = z.object({
  id: z.boolean().optional(),
  testId: z.boolean().optional(),
  versionNumber: z.boolean().optional(),
  status: z.boolean().optional(),
  effectiveDate: z.boolean().optional(),
  retiredDate: z.boolean().optional(),
  changeReason: z.boolean().optional(),
  changeNotes: z.boolean().optional(),
  href: z.boolean().optional(),
  testName: z.boolean().optional(),
  alternativeName: z.boolean().optional(),
  alternativeName1: z.boolean().optional(),
  alternativeName2: z.boolean().optional(),
  alternativeName3: z.boolean().optional(),
  alternativeName4: z.boolean().optional(),
  alternativeName5: z.boolean().optional(),
  testIncludes: z.boolean().optional(),
  methodology: z.boolean().optional(),
  testDescription: z.boolean().optional(),
  diseases: z.boolean().optional(),
  probes: z.boolean().optional(),
  clinicalSignificance: z.boolean().optional(),
  diseaseIndications: z.boolean().optional(),
  testUsage: z.boolean().optional(),
  testLimitations: z.boolean().optional(),
  isNewYorkApproved: z.boolean().optional(),
  levelOfService: z.boolean().optional(),
  turnAroundTime: z.boolean().optional(),
  referenceRanges: z.boolean().optional(),
  setupSchedule: z.boolean().optional(),
  testCategory: z.boolean().optional(),
  testSubCategory: z.boolean().optional(),
  specialNotes: z.boolean().optional(),
  patientResources: z.boolean().optional(),
  providerResources: z.boolean().optional(),
  patientResourcesUrl: z.boolean().optional(),
  providerResourcesUrl: z.boolean().optional(),
  additionalNotes: z.boolean().optional(),
  isFDAApproved: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  specimens: z.union([z.boolean(),z.lazy(() => TestCatalogVersionSpecimenFindManyArgsSchema)]).optional(),
  biomarkers: z.union([z.boolean(),z.lazy(() => TestCatalogVersionBiomarkerFindManyArgsSchema)]).optional(),
  cptCodes: z.union([z.boolean(),z.lazy(() => TestCatalogVersionCptCodeFindManyArgsSchema)]).optional(),
  orderLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderLoincFindManyArgsSchema)]).optional(),
  resultLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionResultLoincFindManyArgsSchema)]).optional(),
  orderForms: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormFindManyArgsSchema)]).optional(),
  consents: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentFindManyArgsSchema)]).optional(),
  consentAuditLogs: z.union([z.boolean(),z.lazy(() => ConsentAuditLogFindManyArgsSchema)]).optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  approvals: z.union([z.boolean(),z.lazy(() => TestCatalogApprovalFindManyArgsSchema)]).optional(),
  defaultForTests: z.union([z.boolean(),z.lazy(() => TestCatalogFindManyArgsSchema)]).optional(),
  configurations: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationFindManyArgsSchema)]).optional(),
  reviewThreads: z.union([z.boolean(),z.lazy(() => ReviewThreadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogVersionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestCatalogVersionDeleteArgsSchema: z.ZodType<Prisma.TestCatalogVersionDeleteArgs> = z.object({
  select: TestCatalogVersionSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionIncludeSchema).optional(),
  where: TestCatalogVersionWhereUniqueInputSchema, 
}).strict();

export default TestCatalogVersionDeleteArgsSchema;
