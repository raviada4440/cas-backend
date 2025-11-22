import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereInputSchema'
import { TestCatalogVersionOrderLoincOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincOrderByWithAggregationInputSchema'
import { TestCatalogVersionOrderLoincScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincScalarFieldEnumSchema'
import { TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionOrderLoincGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincGroupByArgs> = z.object({
  where: TestCatalogVersionOrderLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderLoincOrderByWithAggregationInputSchema.array(), TestCatalogVersionOrderLoincOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionOrderLoincScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderLoincGroupByArgsSchema;
