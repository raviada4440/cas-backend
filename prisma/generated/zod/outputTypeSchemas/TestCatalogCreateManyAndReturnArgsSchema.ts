import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogCreateManyInputSchema'

export const TestCatalogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogCreateManyInputSchema, TestCatalogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogCreateManyAndReturnArgsSchema;
