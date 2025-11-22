import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionWhereInputSchema'
import { TestCatalogVersionOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderByWithRelationInputSchema'
import { TestCatalogVersionWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionWhereUniqueInputSchema'

export const TestCatalogVersionAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionAggregateArgs> = z.object({
  where: TestCatalogVersionWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderByWithRelationInputSchema.array(), TestCatalogVersionOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionAggregateArgsSchema;
