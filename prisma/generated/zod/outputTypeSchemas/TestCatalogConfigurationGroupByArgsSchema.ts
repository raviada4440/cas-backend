import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationWhereInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationWhereInputSchema'
import { TestCatalogConfigurationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationOrderByWithAggregationInputSchema'
import { TestCatalogConfigurationScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogConfigurationScalarFieldEnumSchema'
import { TestCatalogConfigurationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationScalarWhereWithAggregatesInputSchema'

export const TestCatalogConfigurationGroupByArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationGroupByArgs> = z.object({
  where: TestCatalogConfigurationWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogConfigurationOrderByWithAggregationInputSchema.array(), TestCatalogConfigurationOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogConfigurationScalarFieldEnumSchema.array(), 
  having: TestCatalogConfigurationScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogConfigurationGroupByArgsSchema;
