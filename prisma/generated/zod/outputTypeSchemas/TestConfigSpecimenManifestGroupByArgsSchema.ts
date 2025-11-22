import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigSpecimenManifestWhereInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestWhereInputSchema'
import { TestConfigSpecimenManifestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestOrderByWithAggregationInputSchema'
import { TestConfigSpecimenManifestScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestScalarFieldEnumSchema'
import { TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema'

export const TestConfigSpecimenManifestGroupByArgsSchema: z.ZodType<Prisma.TestConfigSpecimenManifestGroupByArgs> = z.object({
  where: TestConfigSpecimenManifestWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigSpecimenManifestOrderByWithAggregationInputSchema.array(), TestConfigSpecimenManifestOrderByWithAggregationInputSchema ]).optional(),
  by: TestConfigSpecimenManifestScalarFieldEnumSchema.array(), 
  having: TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigSpecimenManifestGroupByArgsSchema;
