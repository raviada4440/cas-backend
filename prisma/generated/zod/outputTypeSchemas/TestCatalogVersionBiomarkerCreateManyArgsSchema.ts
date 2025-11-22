import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerCreateManyInputSchema'

export const TestCatalogVersionBiomarkerCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionBiomarkerCreateManyInputSchema, TestCatalogVersionBiomarkerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionBiomarkerCreateManyArgsSchema;
