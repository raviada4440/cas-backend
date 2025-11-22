import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';
import { EnumTestCatalogConfigurationTypeFieldUpdateOperationsInputSchema } from './EnumTestCatalogConfigurationTypeFieldUpdateOperationsInputSchema';
import { VariantDimensionSchema } from './VariantDimensionSchema';
import { EnumVariantDimensionFieldUpdateOperationsInputSchema } from './EnumVariantDimensionFieldUpdateOperationsInputSchema';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';
import { EnumTestCatalogConfigurationStatusFieldUpdateOperationsInputSchema } from './EnumTestCatalogConfigurationStatusFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogConfigurationUpdateconsentTemplateIdsInputSchema } from './TestCatalogConfigurationUpdateconsentTemplateIdsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogUpdateOneRequiredWithoutConfigurationsNestedInputSchema } from './TestCatalogUpdateOneRequiredWithoutConfigurationsNestedInputSchema';
import { TestCatalogVersionUpdateOneWithoutConfigurationsNestedInputSchema } from './TestCatalogVersionUpdateOneWithoutConfigurationsNestedInputSchema';
import { TestCatalogVersionConsentUpdateManyWithoutConfigurationNestedInputSchema } from './TestCatalogVersionConsentUpdateManyWithoutConfigurationNestedInputSchema';
import { TestCatalogApprovalUpdateManyWithoutConfigurationNestedInputSchema } from './TestCatalogApprovalUpdateManyWithoutConfigurationNestedInputSchema';
import { LabOrderUpdateManyWithoutConfigurationNestedInputSchema } from './LabOrderUpdateManyWithoutConfigurationNestedInputSchema';
import { TestConfigCptCodeUpdateManyWithoutConfigurationNestedInputSchema } from './TestConfigCptCodeUpdateManyWithoutConfigurationNestedInputSchema';
import { TestConfigOrderLoincUpdateManyWithoutConfigurationNestedInputSchema } from './TestConfigOrderLoincUpdateManyWithoutConfigurationNestedInputSchema';
import { TestConfigResultLoincUpdateManyWithoutConfigurationNestedInputSchema } from './TestConfigResultLoincUpdateManyWithoutConfigurationNestedInputSchema';
import { TestConfigSpecimenManifestUpdateManyWithoutConfigurationNestedInputSchema } from './TestConfigSpecimenManifestUpdateManyWithoutConfigurationNestedInputSchema';
import { TestCatalogVersionOrderFormUpdateManyWithoutConfigurationNestedInputSchema } from './TestCatalogVersionOrderFormUpdateManyWithoutConfigurationNestedInputSchema';

export const TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  configurationName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  versionNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => TestCatalogConfigurationTypeSchema), z.lazy(() => EnumTestCatalogConfigurationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  dimension: z.union([ z.lazy(() => VariantDimensionSchema), z.lazy(() => EnumVariantDimensionFieldUpdateOperationsInputSchema) ]).optional(),
  dimensionValue: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  operationalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => TestCatalogConfigurationStatusSchema), z.lazy(() => EnumTestCatalogConfigurationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  isDefault: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  customTestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customTurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customPricing: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customSpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customCollectionMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  effectiveDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expirationDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastActivatedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastDeactivatedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requiresConsent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  consentTemplateIds: z.union([ z.lazy(() => TestCatalogConfigurationUpdateconsentTemplateIdsInputSchema), z.string().array() ]).optional(),
  customConsentText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requiresApproval: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  approvalWorkflowId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approvedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approvedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  test: z.lazy(() => TestCatalogUpdateOneRequiredWithoutConfigurationsNestedInputSchema).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneWithoutConfigurationsNestedInputSchema).optional(),
  consents: z.lazy(() => TestCatalogVersionConsentUpdateManyWithoutConfigurationNestedInputSchema).optional(),
  approvals: z.lazy(() => TestCatalogApprovalUpdateManyWithoutConfigurationNestedInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderUpdateManyWithoutConfigurationNestedInputSchema).optional(),
  cptOverrides: z.lazy(() => TestConfigCptCodeUpdateManyWithoutConfigurationNestedInputSchema).optional(),
  orderLoincOverrides: z.lazy(() => TestConfigOrderLoincUpdateManyWithoutConfigurationNestedInputSchema).optional(),
  resultLoincOverrides: z.lazy(() => TestConfigResultLoincUpdateManyWithoutConfigurationNestedInputSchema).optional(),
  specimenManifestEntries: z.lazy(() => TestConfigSpecimenManifestUpdateManyWithoutConfigurationNestedInputSchema).optional(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithoutConfigurationNestedInputSchema).optional(),
});

export default TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema;
