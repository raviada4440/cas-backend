import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogApprovalUpdateManyMutationInputSchema'
import { TestCatalogApprovalUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogApprovalUncheckedUpdateManyInputSchema'
import { TestCatalogApprovalWhereInputSchema } from '../inputTypeSchemas/TestCatalogApprovalWhereInputSchema'

export const TestCatalogApprovalUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogApprovalUpdateManyMutationInputSchema, TestCatalogApprovalUncheckedUpdateManyInputSchema ]),
  where: TestCatalogApprovalWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogApprovalUpdateManyArgsSchema;
