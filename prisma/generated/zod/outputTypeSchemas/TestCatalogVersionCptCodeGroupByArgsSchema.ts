import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereInputSchema'
import { TestCatalogVersionCptCodeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeOrderByWithAggregationInputSchema'
import { TestCatalogVersionCptCodeScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeScalarFieldEnumSchema'
import { TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionCptCodeGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeGroupByArgs> = z.object({
  where: TestCatalogVersionCptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionCptCodeOrderByWithAggregationInputSchema.array(), TestCatalogVersionCptCodeOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionCptCodeScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionCptCodeGroupByArgsSchema;
