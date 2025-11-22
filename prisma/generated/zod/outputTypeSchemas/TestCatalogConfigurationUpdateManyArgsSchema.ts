import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationUpdateManyMutationInputSchema'
import { TestCatalogConfigurationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationUncheckedUpdateManyInputSchema'
import { TestCatalogConfigurationWhereInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationWhereInputSchema'

export const TestCatalogConfigurationUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogConfigurationUpdateManyMutationInputSchema, TestCatalogConfigurationUncheckedUpdateManyInputSchema ]),
  where: TestCatalogConfigurationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogConfigurationUpdateManyArgsSchema;
