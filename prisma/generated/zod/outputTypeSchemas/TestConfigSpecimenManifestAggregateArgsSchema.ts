import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigSpecimenManifestWhereInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestWhereInputSchema'
import { TestConfigSpecimenManifestOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestOrderByWithRelationInputSchema'
import { TestConfigSpecimenManifestWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestWhereUniqueInputSchema'

export const TestConfigSpecimenManifestAggregateArgsSchema: z.ZodType<Prisma.TestConfigSpecimenManifestAggregateArgs> = z.object({
  where: TestConfigSpecimenManifestWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigSpecimenManifestOrderByWithRelationInputSchema.array(), TestConfigSpecimenManifestOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigSpecimenManifestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigSpecimenManifestAggregateArgsSchema;
