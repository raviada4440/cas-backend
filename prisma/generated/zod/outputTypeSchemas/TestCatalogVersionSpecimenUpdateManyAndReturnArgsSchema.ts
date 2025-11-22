import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenUpdateManyMutationInputSchema'
import { TestCatalogVersionSpecimenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenUncheckedUpdateManyInputSchema'
import { TestCatalogVersionSpecimenWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenWhereInputSchema'

export const TestCatalogVersionSpecimenUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionSpecimenUpdateManyMutationInputSchema, TestCatalogVersionSpecimenUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionSpecimenWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionSpecimenUpdateManyAndReturnArgsSchema;
