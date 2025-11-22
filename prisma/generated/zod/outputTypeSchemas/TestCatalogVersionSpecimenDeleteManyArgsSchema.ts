import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenWhereInputSchema'

export const TestCatalogVersionSpecimenDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenDeleteManyArgs> = z.object({
  where: TestCatalogVersionSpecimenWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionSpecimenDeleteManyArgsSchema;
