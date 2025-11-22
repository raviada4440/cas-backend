import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationCreateManyInputSchema'

export const TestCatalogConfigurationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogConfigurationCreateManyInputSchema, TestCatalogConfigurationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogConfigurationCreateManyAndReturnArgsSchema;
