import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumConsentTypeFilterSchema } from './EnumConsentTypeFilterSchema';
import { ConsentTypeSchema } from './ConsentTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { EnumConsentTemplateStatusFilterSchema } from './EnumConsentTemplateStatusFilterSchema';
import { ConsentTemplateStatusSchema } from './ConsentTemplateStatusSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionConsentListRelationFilterSchema } from './TestCatalogVersionConsentListRelationFilterSchema';
import { LabOrderConsentListRelationFilterSchema } from './LabOrderConsentListRelationFilterSchema';
import { ConsentAuditLogListRelationFilterSchema } from './ConsentAuditLogListRelationFilterSchema';

export const ConsentTemplateWhereInputSchema: z.ZodType<Prisma.ConsentTemplateWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ConsentTemplateWhereInputSchema), z.lazy(() => ConsentTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConsentTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConsentTemplateWhereInputSchema), z.lazy(() => ConsentTemplateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  consentType: z.union([ z.lazy(() => EnumConsentTypeFilterSchema), z.lazy(() => ConsentTypeSchema) ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  legalText: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  formSchema: z.lazy(() => JsonNullableFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumConsentTemplateStatusFilterSchema), z.lazy(() => ConsentTemplateStatusSchema) ]).optional(),
  version: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  effectiveDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  retiredDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  isGlobal: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  versionConsents: z.lazy(() => TestCatalogVersionConsentListRelationFilterSchema).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentListRelationFilterSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogListRelationFilterSchema).optional(),
});

export default ConsentTemplateWhereInputSchema;
