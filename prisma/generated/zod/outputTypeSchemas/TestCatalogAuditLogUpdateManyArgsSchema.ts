import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogUpdateManyMutationInputSchema'
import { TestCatalogAuditLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogUncheckedUpdateManyInputSchema'
import { TestCatalogAuditLogWhereInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogWhereInputSchema'

export const TestCatalogAuditLogUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogAuditLogUpdateManyMutationInputSchema, TestCatalogAuditLogUncheckedUpdateManyInputSchema ]),
  where: TestCatalogAuditLogWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogAuditLogUpdateManyArgsSchema;
