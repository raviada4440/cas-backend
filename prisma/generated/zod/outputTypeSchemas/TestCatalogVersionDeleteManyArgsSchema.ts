import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionWhereInputSchema'

export const TestCatalogVersionDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionDeleteManyArgs> = z.object({
  where: TestCatalogVersionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionDeleteManyArgsSchema;
