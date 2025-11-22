import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerIncludeSchema } from '../inputTypeSchemas/BiomarkerIncludeSchema'
import { BiomarkerUpdateInputSchema } from '../inputTypeSchemas/BiomarkerUpdateInputSchema'
import { BiomarkerUncheckedUpdateInputSchema } from '../inputTypeSchemas/BiomarkerUncheckedUpdateInputSchema'
import { BiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/BiomarkerWhereUniqueInputSchema'
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

export const BiomarkerUpdateArgsSchema: z.ZodType<Prisma.BiomarkerUpdateArgs> = z.object({
  select: BiomarkerSelectSchema.optional(),
  include: z.lazy(() => BiomarkerIncludeSchema).optional(),
  data: z.union([ BiomarkerUpdateInputSchema, BiomarkerUncheckedUpdateInputSchema ]),
  where: BiomarkerWhereUniqueInputSchema, 
}).strict();

export default BiomarkerUpdateArgsSchema;
