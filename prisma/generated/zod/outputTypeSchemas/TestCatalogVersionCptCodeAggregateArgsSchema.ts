import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereInputSchema'
import { TestCatalogVersionCptCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeOrderByWithRelationInputSchema'
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeWhereUniqueInputSchema'

export const TestCatalogVersionCptCodeAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeAggregateArgs> = z.object({
  where: TestCatalogVersionCptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionCptCodeOrderByWithRelationInputSchema.array(), TestCatalogVersionCptCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionCptCodeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionCptCodeAggregateArgsSchema;
