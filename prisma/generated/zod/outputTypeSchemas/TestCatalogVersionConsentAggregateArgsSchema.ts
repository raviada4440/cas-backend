import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentWhereInputSchema'
import { TestCatalogVersionConsentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentOrderByWithRelationInputSchema'
import { TestCatalogVersionConsentWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentWhereUniqueInputSchema'

export const TestCatalogVersionConsentAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentAggregateArgs> = z.object({
  where: TestCatalogVersionConsentWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionConsentOrderByWithRelationInputSchema.array(), TestCatalogVersionConsentOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionConsentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionConsentAggregateArgsSchema;
