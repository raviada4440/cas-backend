import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerIncludeSchema } from '../inputTypeSchemas/TestConfigBiomarkerIncludeSchema'
import { TestConfigBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereUniqueInputSchema'
import { TestConfigBiomarkerCreateInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerCreateInputSchema'
import { TestConfigBiomarkerUncheckedCreateInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerUncheckedCreateInputSchema'
import { TestConfigBiomarkerUpdateInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerUpdateInputSchema'
import { TestConfigBiomarkerUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerUncheckedUpdateInputSchema'
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

export const TestConfigBiomarkerUpsertArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerUpsertArgs> = z.object({
  select: TestConfigBiomarkerSelectSchema.optional(),
  include: z.lazy(() => TestConfigBiomarkerIncludeSchema).optional(),
  where: TestConfigBiomarkerWhereUniqueInputSchema, 
  create: z.union([ TestConfigBiomarkerCreateInputSchema, TestConfigBiomarkerUncheckedCreateInputSchema ]),
  update: z.union([ TestConfigBiomarkerUpdateInputSchema, TestConfigBiomarkerUncheckedUpdateInputSchema ]),
}).strict();

export default TestConfigBiomarkerUpsertArgsSchema;
