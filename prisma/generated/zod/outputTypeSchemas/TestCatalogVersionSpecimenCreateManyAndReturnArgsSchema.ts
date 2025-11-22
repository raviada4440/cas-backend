import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenCreateManyInputSchema'

export const TestCatalogVersionSpecimenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionSpecimenCreateManyInputSchema, TestCatalogVersionSpecimenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionSpecimenCreateManyAndReturnArgsSchema;
