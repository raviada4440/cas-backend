import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumAuditActionFilterSchema } from './EnumAuditActionFilterSchema';
import { AuditActionSchema } from './AuditActionSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ConsentTemplateNullableScalarRelationFilterSchema } from './ConsentTemplateNullableScalarRelationFilterSchema';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';
import { TestCatalogNullableScalarRelationFilterSchema } from './TestCatalogNullableScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogVersionNullableScalarRelationFilterSchema } from './TestCatalogVersionNullableScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionConsentNullableScalarRelationFilterSchema } from './TestCatalogVersionConsentNullableScalarRelationFilterSchema';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';

export const ConsentAuditLogWhereInputSchema: z.ZodType<Prisma.ConsentAuditLogWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ConsentAuditLogWhereInputSchema), z.lazy(() => ConsentAuditLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConsentAuditLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConsentAuditLogWhereInputSchema), z.lazy(() => ConsentAuditLogWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  consentTemplateId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  testId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  versionId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  versionConsentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  action: z.union([ z.lazy(() => EnumAuditActionFilterSchema), z.lazy(() => AuditActionSchema) ]).optional(),
  fieldName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  oldValue: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  newValue: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  changeReason: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  performedBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  performedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  consentTemplate: z.union([ z.lazy(() => ConsentTemplateNullableScalarRelationFilterSchema), z.lazy(() => ConsentTemplateWhereInputSchema) ]).optional().nullable(),
  test: z.union([ z.lazy(() => TestCatalogNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional().nullable(),
  version: z.union([ z.lazy(() => TestCatalogVersionNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional().nullable(),
  versionConsent: z.union([ z.lazy(() => TestCatalogVersionConsentNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionConsentWhereInputSchema) ]).optional().nullable(),
});

export default ConsentAuditLogWhereInputSchema;
