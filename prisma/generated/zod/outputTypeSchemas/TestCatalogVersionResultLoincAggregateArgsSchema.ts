import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionResultLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincWhereInputSchema'
import { TestCatalogVersionResultLoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincOrderByWithRelationInputSchema'
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincWhereUniqueInputSchema'

export const TestCatalogVersionResultLoincAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincAggregateArgs> = z.object({
  where: TestCatalogVersionResultLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionResultLoincOrderByWithRelationInputSchema.array(), TestCatalogVersionResultLoincOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionResultLoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionResultLoincAggregateArgsSchema;
