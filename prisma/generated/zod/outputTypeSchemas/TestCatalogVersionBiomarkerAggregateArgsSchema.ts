import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereInputSchema'
import { TestCatalogVersionBiomarkerOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerOrderByWithRelationInputSchema'
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereUniqueInputSchema'

export const TestCatalogVersionBiomarkerAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerAggregateArgs> = z.object({
  where: TestCatalogVersionBiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionBiomarkerOrderByWithRelationInputSchema.array(), TestCatalogVersionBiomarkerOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionBiomarkerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionBiomarkerAggregateArgsSchema;
