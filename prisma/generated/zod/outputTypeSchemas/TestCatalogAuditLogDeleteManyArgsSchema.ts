import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogWhereInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogWhereInputSchema'

export const TestCatalogAuditLogDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogDeleteManyArgs> = z.object({
  where: TestCatalogAuditLogWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogAuditLogDeleteManyArgsSchema;
