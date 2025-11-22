import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionResultLoincCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincCreateManyInputSchema'

export const TestCatalogVersionResultLoincCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionResultLoincCreateManyInputSchema, TestCatalogVersionResultLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionResultLoincCreateManyArgsSchema;
