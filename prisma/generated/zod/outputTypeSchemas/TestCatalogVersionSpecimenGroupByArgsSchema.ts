import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenWhereInputSchema'
import { TestCatalogVersionSpecimenOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenOrderByWithAggregationInputSchema'
import { TestCatalogVersionSpecimenScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenScalarFieldEnumSchema'
import { TestCatalogVersionSpecimenScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionSpecimenGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenGroupByArgs> = z.object({
  where: TestCatalogVersionSpecimenWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionSpecimenOrderByWithAggregationInputSchema.array(), TestCatalogVersionSpecimenOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionSpecimenScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionSpecimenScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionSpecimenGroupByArgsSchema;
