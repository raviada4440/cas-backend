import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogUpdateManyMutationInputSchema'
import { TestCatalogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogUncheckedUpdateManyInputSchema'
import { TestCatalogWhereInputSchema } from '../inputTypeSchemas/TestCatalogWhereInputSchema'

export const TestCatalogUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogUpdateManyMutationInputSchema, TestCatalogUncheckedUpdateManyInputSchema ]),
  where: TestCatalogWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogUpdateManyAndReturnArgsSchema;
