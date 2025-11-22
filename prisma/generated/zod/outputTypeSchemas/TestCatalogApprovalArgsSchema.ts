import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalSelectSchema } from '../inputTypeSchemas/TestCatalogApprovalSelectSchema';
import { TestCatalogApprovalIncludeSchema } from '../inputTypeSchemas/TestCatalogApprovalIncludeSchema';

export const TestCatalogApprovalArgsSchema: z.ZodType<Prisma.TestCatalogApprovalDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogApprovalSelectSchema).optional(),
  include: z.lazy(() => TestCatalogApprovalIncludeSchema).optional(),
}).strict();

export default TestCatalogApprovalArgsSchema;
