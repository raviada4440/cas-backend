import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereInputSchema'
import { TestCatalogVersionOrderFormOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormOrderByWithAggregationInputSchema'
import { TestCatalogVersionOrderFormScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormScalarFieldEnumSchema'
import { TestCatalogVersionOrderFormScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionOrderFormGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormGroupByArgs> = z.object({
  where: TestCatalogVersionOrderFormWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderFormOrderByWithAggregationInputSchema.array(), TestCatalogVersionOrderFormOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionOrderFormScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionOrderFormScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderFormGroupByArgsSchema;
