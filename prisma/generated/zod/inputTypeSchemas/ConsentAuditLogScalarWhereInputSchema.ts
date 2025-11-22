import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumAuditActionFilterSchema } from './EnumAuditActionFilterSchema';
import { AuditActionSchema } from './AuditActionSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ConsentAuditLogScalarWhereInputSchema: z.ZodType<Prisma.ConsentAuditLogScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ConsentAuditLogScalarWhereInputSchema), z.lazy(() => ConsentAuditLogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConsentAuditLogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConsentAuditLogScalarWhereInputSchema), z.lazy(() => ConsentAuditLogScalarWhereInputSchema).array() ]).optional(),
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
});

export default ConsentAuditLogScalarWhereInputSchema;
