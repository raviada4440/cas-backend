import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionResultLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincWhereInputSchema'

export const TestCatalogVersionResultLoincDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincDeleteManyArgs> = z.object({
  where: TestCatalogVersionResultLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionResultLoincDeleteManyArgsSchema;
