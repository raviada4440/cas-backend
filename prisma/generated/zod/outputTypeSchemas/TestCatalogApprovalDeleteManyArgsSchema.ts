import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalWhereInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereInputSchema'

export const TestCatalogApprovalDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogApprovalDeleteManyArgs> = z.object({
  where: TestCatalogApprovalWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogApprovalDeleteManyArgsSchema;
