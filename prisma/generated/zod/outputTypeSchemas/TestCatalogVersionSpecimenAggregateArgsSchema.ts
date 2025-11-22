import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenWhereInputSchema'
import { TestCatalogVersionSpecimenOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenOrderByWithRelationInputSchema'
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenWhereUniqueInputSchema'

export const TestCatalogVersionSpecimenAggregateArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenAggregateArgs> = z.object({
  where: TestCatalogVersionSpecimenWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionSpecimenOrderByWithRelationInputSchema.array(), TestCatalogVersionSpecimenOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionSpecimenWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestCatalogVersionSpecimenAggregateArgsSchema;
