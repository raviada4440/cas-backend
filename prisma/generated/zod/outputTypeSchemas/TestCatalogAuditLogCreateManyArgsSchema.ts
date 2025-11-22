import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogCreateManyInputSchema'

export const TestCatalogAuditLogCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogCreateManyArgs> = z.object({
  data: z.union([ TestCatalogAuditLogCreateManyInputSchema, TestCatalogAuditLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogAuditLogCreateManyArgsSchema;
