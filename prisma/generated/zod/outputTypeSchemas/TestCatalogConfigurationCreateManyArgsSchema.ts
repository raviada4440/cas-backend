import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationCreateManyInputSchema'

export const TestCatalogConfigurationCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateManyArgs> = z.object({
  data: z.union([ TestCatalogConfigurationCreateManyInputSchema, TestCatalogConfigurationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogConfigurationCreateManyArgsSchema;
