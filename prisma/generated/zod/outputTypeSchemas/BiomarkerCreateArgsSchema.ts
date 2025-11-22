import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerIncludeSchema } from '../inputTypeSchemas/BiomarkerIncludeSchema'
import { BiomarkerCreateInputSchema } from '../inputTypeSchemas/BiomarkerCreateInputSchema'
import { BiomarkerUncheckedCreateInputSchema } from '../inputTypeSchemas/BiomarkerUncheckedCreateInputSchema'
import { TestCatalogVersionBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionBiomarkerFindManyArgsSchema"
import { TestConfigBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestConfigBiomarkerFindManyArgsSchema"
import { BiomarkerCountOutputTypeArgsSchema } from "../outputTypeSchemas/BiomarkerCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BiomarkerSelectSchema: z.ZodType<Prisma.BiomarkerSelect> = z.object({
  hgncId: z.boolean().optional(),
  hgncStatus: z.boolean().optional(),
  hgncApprovedSymbol: z.boolean().optional(),
  hgncApprovedName: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  testBiomarkers: z.union([z.boolean(),z.lazy(() => TestCatalogVersionBiomarkerFindManyArgsSchema)]).optional(),
  configOverrides: z.union([z.boolean(),z.lazy(() => TestConfigBiomarkerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BiomarkerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BiomarkerCreateArgsSchema: z.ZodType<Prisma.BiomarkerCreateArgs> = z.object({
  select: BiomarkerSelectSchema.optional(),
  include: z.lazy(() => BiomarkerIncludeSchema).optional(),
  data: z.union([ BiomarkerCreateInputSchema, BiomarkerUncheckedCreateInputSchema ]),
}).strict();

export default BiomarkerCreateArgsSchema;
