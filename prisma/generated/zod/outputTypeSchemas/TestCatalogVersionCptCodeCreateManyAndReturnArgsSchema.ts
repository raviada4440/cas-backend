import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeCreateManyInputSchema'

export const TestCatalogVersionCptCodeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionCptCodeCreateManyInputSchema, TestCatalogVersionCptCodeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionCptCodeCreateManyAndReturnArgsSchema;
