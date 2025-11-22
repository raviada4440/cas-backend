import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerIncludeSchema } from '../inputTypeSchemas/BiomarkerIncludeSchema'
import { BiomarkerWhereInputSchema } from '../inputTypeSchemas/BiomarkerWhereInputSchema'
import { BiomarkerOrderByWithRelationInputSchema } from '../inputTypeSchemas/BiomarkerOrderByWithRelationInputSchema'
import { BiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/BiomarkerWhereUniqueInputSchema'
import { BiomarkerScalarFieldEnumSchema } from '../inputTypeSchemas/BiomarkerScalarFieldEnumSchema'
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

export const BiomarkerFindManyArgsSchema: z.ZodType<Prisma.BiomarkerFindManyArgs> = z.object({
  select: BiomarkerSelectSchema.optional(),
  include: z.lazy(() => BiomarkerIncludeSchema).optional(),
  where: BiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ BiomarkerOrderByWithRelationInputSchema.array(), BiomarkerOrderByWithRelationInputSchema ]).optional(),
  cursor: BiomarkerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BiomarkerScalarFieldEnumSchema, BiomarkerScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default BiomarkerFindManyArgsSchema;
