import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincUpdateManyMutationInputSchema'
import { TestCatalogVersionOrderLoincUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincUncheckedUpdateManyInputSchema'
import { TestCatalogVersionOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereInputSchema'

export const TestCatalogVersionOrderLoincUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionOrderLoincUpdateManyMutationInputSchema, TestCatalogVersionOrderLoincUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionOrderLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderLoincUpdateManyAndReturnArgsSchema;
