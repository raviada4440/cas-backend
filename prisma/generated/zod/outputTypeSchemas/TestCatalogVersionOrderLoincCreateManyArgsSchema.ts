import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincCreateManyInputSchema'

export const TestCatalogVersionOrderLoincCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionOrderLoincCreateManyInputSchema, TestCatalogVersionOrderLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionOrderLoincCreateManyArgsSchema;
