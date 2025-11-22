import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInputSchema } from './TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumTestCatalogConfigurationTypeFilterSchema } from './EnumTestCatalogConfigurationTypeFilterSchema';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';
import { EnumVariantDimensionFilterSchema } from './EnumVariantDimensionFilterSchema';
import { VariantDimensionSchema } from './VariantDimensionSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTestCatalogConfigurationStatusFilterSchema } from './EnumTestCatalogConfigurationStatusFilterSchema';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogScalarRelationFilterSchema } from './TestCatalogScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogVersionNullableScalarRelationFilterSchema } from './TestCatalogVersionNullableScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionConsentListRelationFilterSchema } from './TestCatalogVersionConsentListRelationFilterSchema';
import { TestCatalogApprovalListRelationFilterSchema } from './TestCatalogApprovalListRelationFilterSchema';
import { LabOrderListRelationFilterSchema } from './LabOrderListRelationFilterSchema';
import { TestConfigCptCodeListRelationFilterSchema } from './TestConfigCptCodeListRelationFilterSchema';
import { TestConfigOrderLoincListRelationFilterSchema } from './TestConfigOrderLoincListRelationFilterSchema';
import { TestConfigResultLoincListRelationFilterSchema } from './TestConfigResultLoincListRelationFilterSchema';
import { TestConfigSpecimenManifestListRelationFilterSchema } from './TestConfigSpecimenManifestListRelationFilterSchema';
import { TestConfigBiomarkerListRelationFilterSchema } from './TestConfigBiomarkerListRelationFilterSchema';
import { TestCatalogVersionOrderFormListRelationFilterSchema } from './TestCatalogVersionOrderFormListRelationFilterSchema';

export const TestCatalogConfigurationWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogConfigurationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    testId_configurationName_customerId_versionNumber: z.lazy(() => TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    testId_configurationName_customerId_versionNumber: z.lazy(() => TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  testId_configurationName_customerId_versionNumber: z.lazy(() => TestCatalogConfigurationTestIdConfigurationNameCustomerIdVersionNumberCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestCatalogConfigurationWhereInputSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogConfigurationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogConfigurationWhereInputSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema).array() ]).optional(),
  testId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  configurationName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  versionNumber: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  customerId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumTestCatalogConfigurationTypeFilterSchema), z.lazy(() => TestCatalogConfigurationTypeSchema) ]).optional(),
  dimension: z.union([ z.lazy(() => EnumVariantDimensionFilterSchema), z.lazy(() => VariantDimensionSchema) ]).optional(),
  dimensionValue: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  operationalCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTestCatalogConfigurationStatusFilterSchema), z.lazy(() => TestCatalogConfigurationStatusSchema) ]).optional(),
  isDefault: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  customTestName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  customDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  customTurnAroundTime: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  customPricing: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  customInstructions: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  customSpecimenRequirements: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  customCollectionMethod: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  effectiveDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  expirationDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  lastActivatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  lastDeactivatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  requiresConsent: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  consentTemplateIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  customConsentText: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  requiresApproval: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  approvalWorkflowId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  approvedBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  approvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  test: z.union([ z.lazy(() => TestCatalogScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  version: z.union([ z.lazy(() => TestCatalogVersionNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional().nullable(),
  consents: z.lazy(() => TestCatalogVersionConsentListRelationFilterSchema).optional(),
  approvals: z.lazy(() => TestCatalogApprovalListRelationFilterSchema).optional(),
  labOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
  cptOverrides: z.lazy(() => TestConfigCptCodeListRelationFilterSchema).optional(),
  orderLoincOverrides: z.lazy(() => TestConfigOrderLoincListRelationFilterSchema).optional(),
  resultLoincOverrides: z.lazy(() => TestConfigResultLoincListRelationFilterSchema).optional(),
  specimenManifestEntries: z.lazy(() => TestConfigSpecimenManifestListRelationFilterSchema).optional(),
  biomarkerOverrides: z.lazy(() => TestConfigBiomarkerListRelationFilterSchema).optional(),
  orderForms: z.lazy(() => TestCatalogVersionOrderFormListRelationFilterSchema).optional(),
}));

export default TestCatalogConfigurationWhereUniqueInputSchema;
