import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionResultLoincUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincUpdateManyMutationInputSchema'
import { TestCatalogVersionResultLoincUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincUncheckedUpdateManyInputSchema'
import { TestCatalogVersionResultLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincWhereInputSchema'

export const TestCatalogVersionResultLoincUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionResultLoincUpdateManyMutationInputSchema, TestCatalogVersionResultLoincUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionResultLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionResultLoincUpdateManyAndReturnArgsSchema;
