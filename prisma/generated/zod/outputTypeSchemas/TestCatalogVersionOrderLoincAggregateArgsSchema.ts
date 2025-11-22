import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereInputSchema'
import { TestCatalogVersionOrderLoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincOrderByWithRelationInputSchema'
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereUniqueInputSchema'

export const TestCatalogVersionOrderLoincAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincAggregateArgs> = z.object({
  where: TestCatalogVersionOrderLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderLoincOrderByWithRelationInputSchema.array(), TestCatalogVersionOrderLoincOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionOrderLoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionOrderLoincAggregateArgsSchema;
