import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerCreateManyInputSchema'

export const TestCatalogVersionBiomarkerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionBiomarkerCreateManyInputSchema, TestCatalogVersionBiomarkerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionBiomarkerCreateManyAndReturnArgsSchema;
