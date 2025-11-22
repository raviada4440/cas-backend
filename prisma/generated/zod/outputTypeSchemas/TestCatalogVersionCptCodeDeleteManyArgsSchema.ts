import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereInputSchema'

export const TestCatalogVersionCptCodeDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeDeleteManyArgs> = z.object({
  where: TestCatalogVersionCptCodeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionCptCodeDeleteManyArgsSchema;
