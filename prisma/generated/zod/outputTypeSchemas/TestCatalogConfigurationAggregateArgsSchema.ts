import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationWhereInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationWhereInputSchema'
import { TestCatalogConfigurationOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationOrderByWithRelationInputSchema'
import { TestCatalogConfigurationWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogConfigurationWhereUniqueInputSchema'

export const TestCatalogConfigurationAggregateArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationAggregateArgs> = z.object({
  where: TestCatalogConfigurationWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogConfigurationOrderByWithRelationInputSchema.array(), TestCatalogConfigurationOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogConfigurationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogConfigurationAggregateArgsSchema;
