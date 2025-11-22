import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"

export const TestCatalogAuditLogIncludeSchema: z.ZodType<Prisma.TestCatalogAuditLogInclude> = z.object({
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict();

export default TestCatalogAuditLogIncludeSchema;
