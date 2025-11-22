import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';
import { VariantDimensionSchema } from './VariantDimensionSchema';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { TestCatalogConfigurationCreateconsentTemplateIdsInputSchema } from './TestCatalogConfigurationCreateconsentTemplateIdsInputSchema';
import { TestCatalogCreateNestedOneWithoutConfigurationsInputSchema } from './TestCatalogCreateNestedOneWithoutConfigurationsInputSchema';
import { TestCatalogVersionCreateNestedOneWithoutConfigurationsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutConfigurationsInputSchema';
import { TestCatalogVersionConsentCreateNestedManyWithoutConfigurationInputSchema } from './TestCatalogVersionConsentCreateNestedManyWithoutConfigurationInputSchema';
import { TestCatalogApprovalCreateNestedManyWithoutConfigurationInputSchema } from './TestCatalogApprovalCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigCptCodeCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigCptCodeCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigOrderLoincCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigOrderLoincCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigResultLoincCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigResultLoincCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigSpecimenManifestCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigSpecimenManifestCreateNestedManyWithoutConfigurationInputSchema';
import { TestConfigBiomarkerCreateNestedManyWithoutConfigurationInputSchema } from './TestConfigBiomarkerCreateNestedManyWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormCreateNestedManyWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateNestedManyWithoutConfigurationInputSchema';

export const TestCatalogConfigurationCreateWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateWithoutLabOrdersInput> = z.strictObject({
  id: z.string().optional(),
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
  test: z.lazy(() => TestCatalogCreateNestedOneWithoutConfigurationsInputSchema),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutConfigurationsInputSchema).optional(),
  consents: z.lazy(() => TestCatalogVersionConsentCreateNestedManyWithoutConfigurationInputSchema).optional(),
  approvals: z.lazy(() => TestCatalogApprovalCreateNestedManyWithoutConfigurationInputSchema).optional(),
  cptOverrides: z.lazy(() => TestConfigCptCodeCreateNestedManyWithoutConfigurationInputSchema).optional(),
  orderLoincOverrides: z.lazy(() => TestConfigOrderLoincCreateNestedManyWithoutConfigurationInputSchema).optional(),
  resultLoincOverrides: z.lazy(() => TestConfigResultLoincCreateNestedManyWithoutConfigurationInputSchema).optional(),
  specimenManifestEntries: z.lazy(() => TestConfigSpecimenManifestCreateNestedManyWithoutConfigurationInputSchema).optional(),
  biomarkerOverrides: z.lazy(() => TestConfigBiomarkerCreateNestedManyWithoutConfigurationInputSchema).optional(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormCreateNestedManyWithoutConfigurationInputSchema).optional(),
});

export default TestCatalogConfigurationCreateWithoutLabOrdersInputSchema;
