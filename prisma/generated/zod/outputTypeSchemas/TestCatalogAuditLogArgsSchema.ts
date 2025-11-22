import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogSelectSchema } from '../inputTypeSchemas/TestCatalogAuditLogSelectSchema';
import { TestCatalogAuditLogIncludeSchema } from '../inputTypeSchemas/TestCatalogAuditLogIncludeSchema';

export const TestCatalogAuditLogArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogAuditLogSelectSchema).optional(),
  include: z.lazy(() => TestCatalogAuditLogIncludeSchema).optional(),
}).strict();

export default TestCatalogAuditLogArgsSchema;
