import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerIncludeSchema } from '../inputTypeSchemas/TestConfigBiomarkerIncludeSchema'
import { TestConfigBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereUniqueInputSchema'
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

export const TestConfigBiomarkerFindUniqueArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerFindUniqueArgs> = z.object({
  select: TestConfigBiomarkerSelectSchema.optional(),
  include: z.lazy(() => TestConfigBiomarkerIncludeSchema).optional(),
  where: TestConfigBiomarkerWhereUniqueInputSchema, 
}).strict();

export default TestConfigBiomarkerFindUniqueArgsSchema;
