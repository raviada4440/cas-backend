import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogWhereInputSchema } from '../inputTypeSchemas/TestCatalogWhereInputSchema'

export const TestCatalogDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogDeleteManyArgs> = z.object({
  where: TestCatalogWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogDeleteManyArgsSchema;
