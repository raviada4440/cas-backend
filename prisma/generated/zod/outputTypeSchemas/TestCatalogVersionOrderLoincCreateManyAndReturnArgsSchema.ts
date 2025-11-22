import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincCreateManyInputSchema'

export const TestCatalogVersionOrderLoincCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionOrderLoincCreateManyInputSchema, TestCatalogVersionOrderLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionOrderLoincCreateManyAndReturnArgsSchema;
