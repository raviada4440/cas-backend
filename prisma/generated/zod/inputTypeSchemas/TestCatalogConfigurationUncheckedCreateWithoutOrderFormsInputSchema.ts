import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';
import { VariantDimensionSchema } from './VariantDimensionSchema';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { TestCatalogConfigurationCreateconsentTemplateIdsInputSchema } from './TestCatalogConfigurationCreateconsentTemplateIdsInputSchema';
import { TestCatalogVersionConsentUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedCreateNestedManyWithoutConfigurationInputSchema';
import { TestCatalogApprovalUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedCreateNestedManyWithoutConfigurationInputSchema';
import { LabOrderUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './LabOrderUncheckedCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigCptCodeUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigResultLoincUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUncheckedCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedCreateNestedManyWithoutConfigurationInputSchema';

export const TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInput> = z.strictObject({
  id: z.string().optional(),
  testId: z.string(),
  versionId: z.string().optional().nullable(),
  configurationName: z.string(),
  versionNumber: z.number().optional(),
  customerId: z.string().optional().nullable(),
  organizationId: z.string().optional().nullable(),
  type: z.lazy(() => TestCatalogConfigurationTypeSchema).optional(),
  dimension: z.lazy(() => VariantDimensionSchema),
  dimensionValue: z.string(),
  operationalCode: z.string().optional().nullable(),
  status: z.lazy(() => TestCatalogConfigurationStatusSchema).optional(),
  isDefault: z.boolean().optional(),
  isActive: z.boolean().optional(),
  customTestName: z.string().optional().nullable(),
  customDescription: z.string().optional().nullable(),
  customTurnAroundTime: z.string().optional().nullable(),
  customPricing: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  customInstructions: z.string().optional().nullable(),
  customSpecimenRequirements: z.string().optional().nullable(),
  customCollectionMethod: z.string().optional().nullable(),
  effectiveDate: z.date().optional().nullable(),
  expirationDate: z.date().optional().nullable(),
  lastActivatedAt: z.date().optional().nullable(),
  lastDeactivatedAt: z.date().optional().nullable(),
  requiresConsent: z.boolean().optional(),
  consentTemplateIds: z.union([ z.lazy(() => TestCatalogConfigurationCreateconsentTemplateIdsInputSchema), z.string().array() ]).optional(),
  customConsentText: z.string().optional().nullable(),
  requiresApproval: z.boolean().optional(),
  approvalWorkflowId: z.string().optional().nullable(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.date().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  consents: z.lazy(() => TestCatalogVersionConsentUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
  approvals: z.lazy(() => TestCatalogApprovalUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
  cptOverrides: z.lazy(() => TestConfigCptCodeUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
  orderLoincOverrides: z.lazy(() => TestConfigOrderLoincUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
  resultLoincOverrides: z.lazy(() => TestConfigResultLoincUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
  specimenManifestEntries: z.lazy(() => TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
  biomarkerOverrides: z.lazy(() => TestConfigBiomarkerUncheckedCreateNestedManyWithoutConfigurationInputSchema).optional(),
});

export default TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema;
