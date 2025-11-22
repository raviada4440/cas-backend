import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogApprovalCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogApprovalCreateManyInputSchema'

export const TestCatalogApprovalCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogApprovalCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogApprovalCreateManyInputSchema, TestCatalogApprovalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogApprovalCreateManyAndReturnArgsSchema;
