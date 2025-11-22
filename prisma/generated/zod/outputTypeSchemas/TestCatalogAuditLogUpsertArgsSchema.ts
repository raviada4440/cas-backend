import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogAuditLogIncludeSchema } from '../inputTypeSchemas/TestCatalogAuditLogIncludeSchema'
import { TestCatalogAuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogWhereUniqueInputSchema'
import { TestCatalogAuditLogCreateInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogCreateInputSchema'
import { TestCatalogAuditLogUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogUncheckedCreateInputSchema'
import { TestCatalogAuditLogUpdateInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogUpdateInputSchema'
import { TestCatalogAuditLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestCatalogAuditLogUncheckedUpdateInputSchema'
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogAuditLogSelectSchema: z.ZodType<Prisma.TestCatalogAuditLogSelect> = z.object({
  id: z.boolean().optional(),
  testId: z.boolean().optional(),
  versionNumber: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  action: z.boolean().optional(),
  fieldName: z.boolean().optional(),
  oldValue: z.boolean().optional(),
  newValue: z.boolean().optional(),
  changeReason: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  performedBy: z.boolean().optional(),
  performedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const TestCatalogAuditLogUpsertArgsSchema: z.ZodType<Prisma.TestCatalogAuditLogUpsertArgs> = z.object({
  select: TestCatalogAuditLogSelectSchema.optional(),
  include: z.lazy(() => TestCatalogAuditLogIncludeSchema).optional(),
  where: TestCatalogAuditLogWhereUniqueInputSchema, 
  create: z.union([ TestCatalogAuditLogCreateInputSchema, TestCatalogAuditLogUncheckedCreateInputSchema ]),
  update: z.union([ TestCatalogAuditLogUpdateInputSchema, TestCatalogAuditLogUncheckedUpdateInputSchema ]),
}).strict();

export default TestCatalogAuditLogUpsertArgsSchema;
