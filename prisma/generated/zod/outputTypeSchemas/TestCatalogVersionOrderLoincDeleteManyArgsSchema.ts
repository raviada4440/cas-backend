import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereInputSchema'

export const TestCatalogVersionOrderLoincDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincDeleteManyArgs> = z.object({
  where: TestCatalogVersionOrderLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderLoincDeleteManyArgsSchema;
