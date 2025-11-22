import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogWhereInputSchema } from './TestCatalogAuditLogWhereInputSchema';

export const TestCatalogAuditLogListRelationFilterSchema: z.ZodType<Prisma.TestCatalogAuditLogListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogAuditLogWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogAuditLogWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogAuditLogWhereInputSchema).optional(),
});

export default TestCatalogAuditLogListRelationFilterSchema;
