import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereInputSchema'
import { TestCatalogVersionOrderFormOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormOrderByWithRelationInputSchema'
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormWhereUniqueInputSchema'

export const TestCatalogVersionOrderFormAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormAggregateArgs> = z.object({
  where: TestCatalogVersionOrderFormWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderFormOrderByWithRelationInputSchema.array(), TestCatalogVersionOrderFormOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionOrderFormWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderFormAggregateArgsSchema;
