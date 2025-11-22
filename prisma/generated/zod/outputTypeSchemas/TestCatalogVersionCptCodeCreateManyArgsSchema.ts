import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeCreateManyInputSchema'

export const TestCatalogVersionCptCodeCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeCreateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionCptCodeCreateManyInputSchema, TestCatalogVersionCptCodeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionCptCodeCreateManyArgsSchema;
