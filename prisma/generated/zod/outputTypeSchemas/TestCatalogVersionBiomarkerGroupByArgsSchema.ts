import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereInputSchema'
import { TestCatalogVersionBiomarkerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerOrderByWithAggregationInputSchema'
import { TestCatalogVersionBiomarkerScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerScalarFieldEnumSchema'
import { TestCatalogVersionBiomarkerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionBiomarkerGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerGroupByArgs> = z.object({
  where: TestCatalogVersionBiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionBiomarkerOrderByWithAggregationInputSchema.array(), TestCatalogVersionBiomarkerOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionBiomarkerScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionBiomarkerScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionBiomarkerGroupByArgsSchema;
