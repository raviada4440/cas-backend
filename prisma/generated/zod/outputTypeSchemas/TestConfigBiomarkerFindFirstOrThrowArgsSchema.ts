import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerIncludeSchema } from '../inputTypeSchemas/TestConfigBiomarkerIncludeSchema'
import { TestConfigBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereInputSchema'
import { TestConfigBiomarkerOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerOrderByWithRelationInputSchema'
import { TestConfigBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereUniqueInputSchema'
import { TestConfigBiomarkerScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigBiomarkerScalarFieldEnumSchema'
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { BiomarkerArgsSchema } from "../outputTypeSchemas/BiomarkerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestConfigBiomarkerSelectSchema: z.ZodType<Prisma.TestConfigBiomarkerSelect> = z.object({
  id: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  hgncId: z.boolean().optional(),
  action: z.boolean().optional(),
  transcriptReference: z.boolean().optional(),
  reportTier: z.boolean().optional(),
  isReportable: z.boolean().optional(),
  displayOrder: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  biomarker: z.union([z.boolean(),z.lazy(() => BiomarkerArgsSchema)]).optional(),
}).strict()

export const TestConfigBiomarkerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerFindFirstOrThrowArgs> = z.object({
  select: TestConfigBiomarkerSelectSchema.optional(),
  include: z.lazy(() => TestConfigBiomarkerIncludeSchema).optional(),
  where: TestConfigBiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigBiomarkerOrderByWithRelationInputSchema.array(), TestConfigBiomarkerOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigBiomarkerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestConfigBiomarkerScalarFieldEnumSchema, TestConfigBiomarkerScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestConfigBiomarkerFindFirstOrThrowArgsSchema;
