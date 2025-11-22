import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereInputSchema'

export const TestCatalogVersionBiomarkerDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerDeleteManyArgs> = z.object({
  where: TestCatalogVersionBiomarkerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionBiomarkerDeleteManyArgsSchema;
