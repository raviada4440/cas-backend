import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionResultLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincWhereInputSchema'
import { TestCatalogVersionResultLoincOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincOrderByWithAggregationInputSchema'
import { TestCatalogVersionResultLoincScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincScalarFieldEnumSchema'
import { TestCatalogVersionResultLoincScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionResultLoincGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincGroupByArgs> = z.object({
  where: TestCatalogVersionResultLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionResultLoincOrderByWithAggregationInputSchema.array(), TestCatalogVersionResultLoincOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionResultLoincScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionResultLoincScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionResultLoincGroupByArgsSchema;
