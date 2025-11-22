import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogWhereInputSchema } from '../inputTypeSchemas/TestCatalogWhereInputSchema'
import { TestCatalogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogOrderByWithAggregationInputSchema'
import { TestCatalogScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogScalarFieldEnumSchema'
import { TestCatalogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogScalarWhereWithAggregatesInputSchema'

export const TestCatalogGroupByArgsSchema: z.ZodType<Prisma.TestCatalogGroupByArgs> = z.object({
  where: TestCatalogWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogOrderByWithAggregationInputSchema.array(), TestCatalogOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogScalarFieldEnumSchema.array(), 
  having: TestCatalogScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogGroupByArgsSchema;
