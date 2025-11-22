import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInputSchema } from './TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInputSchema';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionScalarRelationFilterSchema } from './TestCatalogVersionScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogConfigurationNullableScalarRelationFilterSchema } from './TestCatalogConfigurationNullableScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { ConsentTemplateScalarRelationFilterSchema } from './ConsentTemplateScalarRelationFilterSchema';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';
import { LabOrderConsentListRelationFilterSchema } from './LabOrderConsentListRelationFilterSchema';
import { ConsentAuditLogListRelationFilterSchema } from './ConsentAuditLogListRelationFilterSchema';

export const TestCatalogVersionConsentWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    versionId_consentTemplateId: z.lazy(() => TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    versionId_consentTemplateId: z.lazy(() => TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  versionId_consentTemplateId: z.lazy(() => TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestCatalogVersionConsentWhereInputSchema), z.lazy(() => TestCatalogVersionConsentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionConsentWhereInputSchema), z.lazy(() => TestCatalogVersionConsentWhereInputSchema).array() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  consentTemplateId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  displayOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  customTitle: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  customContent: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  conditionalLogic: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  dependsOnConsent: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  version: z.union([ z.lazy(() => TestCatalogVersionScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional().nullable(),
  consentTemplate: z.union([ z.lazy(() => ConsentTemplateScalarRelationFilterSchema), z.lazy(() => ConsentTemplateWhereInputSchema) ]).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentListRelationFilterSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogListRelationFilterSchema).optional(),
}));

export default TestCatalogVersionConsentWhereUniqueInputSchema;
