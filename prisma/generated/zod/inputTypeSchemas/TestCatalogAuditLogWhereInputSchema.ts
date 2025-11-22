import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumAuditActionFilterSchema } from './EnumAuditActionFilterSchema';
import { AuditActionSchema } from './AuditActionSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogScalarRelationFilterSchema } from './TestCatalogScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogAuditLogWhereInputSchema: z.ZodType<Prisma.TestCatalogAuditLogWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogAuditLogWhereInputSchema), z.lazy(() => TestCatalogAuditLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogAuditLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogAuditLogWhereInputSchema), z.lazy(() => TestCatalogAuditLogWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  testId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionNumber: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  configurationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  action: z.union([ z.lazy(() => EnumAuditActionFilterSchema), z.lazy(() => AuditActionSchema) ]).optional(),
  fieldName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  oldValue: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  newValue: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  changeReason: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  performedBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  performedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  test: z.union([ z.lazy(() => TestCatalogScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
});

export default TestCatalogAuditLogWhereInputSchema;
