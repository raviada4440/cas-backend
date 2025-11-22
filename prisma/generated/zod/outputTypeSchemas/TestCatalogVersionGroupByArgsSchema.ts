import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionWhereInputSchema'
import { TestCatalogVersionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderByWithAggregationInputSchema'
import { TestCatalogVersionScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionScalarFieldEnumSchema'
import { TestCatalogVersionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionGroupByArgs> = z.object({
  where: TestCatalogVersionWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderByWithAggregationInputSchema.array(), TestCatalogVersionOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionGroupByArgsSchema;
