import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionCreateManyInputSchema'

export const TestCatalogVersionCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionCreateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionCreateManyInputSchema, TestCatalogVersionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionCreateManyArgsSchema;
