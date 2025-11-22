import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentWhereInputSchema'
import { TestCatalogVersionConsentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentOrderByWithAggregationInputSchema'
import { TestCatalogVersionConsentScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionConsentScalarFieldEnumSchema'
import { TestCatalogVersionConsentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentScalarWhereWithAggregatesInputSchema'

export const TestCatalogVersionConsentGroupByArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentGroupByArgs> = z.object({
  where: TestCatalogVersionConsentWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionConsentOrderByWithAggregationInputSchema.array(), TestCatalogVersionConsentOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogVersionConsentScalarFieldEnumSchema.array(), 
  having: TestCatalogVersionConsentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionConsentGroupByArgsSchema;
