import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogWhereInputSchema } from '../inputTypeSchemas/TestCatalogWhereInputSchema'
import { TestCatalogOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogOrderByWithRelationInputSchema'
import { TestCatalogWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogWhereUniqueInputSchema'

export const TestCatalogAggregateArgsSchema: z.ZodType<Prisma.TestCatalogAggregateArgs> = z.object({
  where: TestCatalogWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogOrderByWithRelationInputSchema.array(), TestCatalogOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogAggregateArgsSchema;
