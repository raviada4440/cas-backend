import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionUpdateManyMutationInputSchema'
import { TestCatalogVersionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionUncheckedUpdateManyInputSchema'
import { TestCatalogVersionWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionWhereInputSchema'

export const TestCatalogVersionUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionUpdateManyMutationInputSchema, TestCatalogVersionUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionUpdateManyArgsSchema;
