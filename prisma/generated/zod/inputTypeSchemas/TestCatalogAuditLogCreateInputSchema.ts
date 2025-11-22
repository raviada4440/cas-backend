import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditActionSchema } from './AuditActionSchema';
import { TestCatalogCreateNestedOneWithoutAuditLogsInputSchema } from './TestCatalogCreateNestedOneWithoutAuditLogsInputSchema';

export const TestCatalogAuditLogCreateInputSchema: z.ZodType<Prisma.TestCatalogAuditLogCreateInput> = z.strictObject({
  id: z.string().optional(),
  versionNumber: z.number().optional().nullable(),
  configurationId: z.string().optional().nullable(),
  action: z.lazy(() => AuditActionSchema),
  fieldName: z.string().optional().nullable(),
  oldValue: z.string().optional().nullable(),
  newValue: z.string().optional().nullable(),
  changeReason: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  performedBy: z.string().optional().nullable(),
  performedAt: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  test: z.lazy(() => TestCatalogCreateNestedOneWithoutAuditLogsInputSchema),
});

export default TestCatalogAuditLogCreateInputSchema;
