import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationIncludeSchema } from '../inputTypeSchemas/TestCatalogConfigurationIncludeSchema'
import { TestCatalogConfigurationCreateInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationCreateInputSchema'
import { TestCatalogConfigurationUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationUncheckedCreateInputSchema'
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogVersionConsentFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentFindManyArgsSchema"
import { TestCatalogApprovalFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogApprovalFindManyArgsSchema"
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { TestConfigCptCodeFindManyArgsSchema } from "../outputTypeSchemas/TestConfigCptCodeFindManyArgsSchema"
import { TestConfigOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigOrderLoincFindManyArgsSchema"
import { TestConfigResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigResultLoincFindManyArgsSchema"
import { TestConfigSpecimenManifestFindManyArgsSchema } from "../outputTypeSchemas/TestConfigSpecimenManifestFindManyArgsSchema"
import { TestConfigBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestConfigBiomarkerFindManyArgsSchema"
import { TestCatalogVersionOrderFormFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormFindManyArgsSchema"
import { TestCatalogConfigurationCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogConfigurationSelectSchema: z.ZodType<Prisma.TestCatalogConfigurationSelect> = z.object({
  id: z.boolean().optional(),
  testId: z.boolean().optional(),
  versionId: z.boolean().optional(),
  configurationName: z.boolean().optional(),
  versionNumber: z.boolean().optional(),
  customerId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  type: z.boolean().optional(),
  dimension: z.boolean().optional(),
  dimensionValue: z.boolean().optional(),
  operationalCode: z.boolean().optional(),
  status: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  isActive: z.boolean().optional(),
  customTestName: z.boolean().optional(),
  customDescription: z.boolean().optional(),
  customTurnAroundTime: z.boolean().optional(),
  customPricing: z.boolean().optional(),
  customInstructions: z.boolean().optional(),
  customSpecimenRequirements: z.boolean().optional(),
  customCollectionMethod: z.boolean().optional(),
  effectiveDate: z.boolean().optional(),
  expirationDate: z.boolean().optional(),
  lastActivatedAt: z.boolean().optional(),
  lastDeactivatedAt: z.boolean().optional(),
  requiresConsent: z.boolean().optional(),
  consentTemplateIds: z.boolean().optional(),
  customConsentText: z.boolean().optional(),
  requiresApproval: z.boolean().optional(),
  approvalWorkflowId: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  consents: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentFindManyArgsSchema)]).optional(),
  approvals: z.union([z.boolean(),z.lazy(() => TestCatalogApprovalFindManyArgsSchema)]).optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  cptOverrides: z.union([z.boolean(),z.lazy(() => TestConfigCptCodeFindManyArgsSchema)]).optional(),
  orderLoincOverrides: z.union([z.boolean(),z.lazy(() => TestConfigOrderLoincFindManyArgsSchema)]).optional(),
  resultLoincOverrides: z.union([z.boolean(),z.lazy(() => TestConfigResultLoincFindManyArgsSchema)]).optional(),
  specimenManifestEntries: z.union([z.boolean(),z.lazy(() => TestConfigSpecimenManifestFindManyArgsSchema)]).optional(),
  biomarkerOverrides: z.union([z.boolean(),z.lazy(() => TestConfigBiomarkerFindManyArgsSchema)]).optional(),
  orderForms: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestCatalogConfigurationCreateArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateArgs> = z.object({
  select: TestCatalogConfigurationSelectSchema.optional(),
  include: z.lazy(() => TestCatalogConfigurationIncludeSchema).optional(),
  data: z.union([ TestCatalogConfigurationCreateInputSchema, TestCatalogConfigurationUncheckedCreateInputSchema ]),
}).strict();

export default TestCatalogConfigurationCreateArgsSchema;
