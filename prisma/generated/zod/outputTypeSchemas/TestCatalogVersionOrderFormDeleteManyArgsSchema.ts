import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereInputSchema'

export const TestCatalogVersionOrderFormDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormDeleteManyArgs> = z.object({
  where: TestCatalogVersionOrderFormWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderFormDeleteManyArgsSchema;
