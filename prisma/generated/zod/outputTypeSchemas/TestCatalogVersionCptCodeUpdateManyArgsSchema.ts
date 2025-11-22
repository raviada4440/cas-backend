import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeUpdateManyMutationInputSchema'
import { TestCatalogVersionCptCodeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeUncheckedUpdateManyInputSchema'
import { TestCatalogVersionCptCodeWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereInputSchema'

export const TestCatalogVersionCptCodeUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionCptCodeUpdateManyMutationInputSchema, TestCatalogVersionCptCodeUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionCptCodeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionCptCodeUpdateManyArgsSchema;
