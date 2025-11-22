import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerIncludeSchema } from '../inputTypeSchemas/BiomarkerIncludeSchema'
import { BiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/BiomarkerWhereUniqueInputSchema'
import { BiomarkerCreateInputSchema } from '../inputTypeSchemas/BiomarkerCreateInputSchema'
import { BiomarkerUncheckedCreateInputSchema } from '../inputTypeSchemas/BiomarkerUncheckedCreateInputSchema'
import { BiomarkerUpdateInputSchema } from '../inputTypeSchemas/BiomarkerUpdateInputSchema'
import { BiomarkerUncheckedUpdateInputSchema } from '../inputTypeSchemas/BiomarkerUncheckedUpdateInputSchema'
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

export const BiomarkerUpsertArgsSchema: z.ZodType<Prisma.BiomarkerUpsertArgs> = z.object({
  select: BiomarkerSelectSchema.optional(),
  include: z.lazy(() => BiomarkerIncludeSchema).optional(),
  where: BiomarkerWhereUniqueInputSchema, 
  create: z.union([ BiomarkerCreateInputSchema, BiomarkerUncheckedCreateInputSchema ]),
  update: z.union([ BiomarkerUpdateInputSchema, BiomarkerUncheckedUpdateInputSchema ]),
}).strict();

export default BiomarkerUpsertArgsSchema;
