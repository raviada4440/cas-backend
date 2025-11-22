import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationWhereInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationWhereInputSchema'

export const TestCatalogConfigurationDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationDeleteManyArgs> = z.object({
  where: TestCatalogConfigurationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogConfigurationDeleteManyArgsSchema;
