import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogCreateManyInputSchema'

export const TestCatalogAuditLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogAuditLogCreateManyInputSchema, TestCatalogAuditLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogAuditLogCreateManyAndReturnArgsSchema;
