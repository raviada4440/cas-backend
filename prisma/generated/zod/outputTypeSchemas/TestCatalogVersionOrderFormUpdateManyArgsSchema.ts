import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormUpdateManyMutationInputSchema'
import { TestCatalogVersionOrderFormUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormUncheckedUpdateManyInputSchema'
import { TestCatalogVersionOrderFormWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereInputSchema'

export const TestCatalogVersionOrderFormUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionOrderFormUpdateManyMutationInputSchema, TestCatalogVersionOrderFormUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionOrderFormWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderFormUpdateManyArgsSchema;
