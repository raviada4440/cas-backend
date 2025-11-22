import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerUpdateManyMutationInputSchema'
import { TestCatalogVersionBiomarkerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerUncheckedUpdateManyInputSchema'
import { TestCatalogVersionBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereInputSchema'

export const TestCatalogVersionBiomarkerUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogVersionBiomarkerUpdateManyMutationInputSchema, TestCatalogVersionBiomarkerUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionBiomarkerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionBiomarkerUpdateManyArgsSchema;
