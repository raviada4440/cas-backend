import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramIncludeSchema } from '../inputTypeSchemas/SponsoredProgramIncludeSchema'
import { SponsoredProgramWhereInputSchema } from '../inputTypeSchemas/SponsoredProgramWhereInputSchema'
import { SponsoredProgramOrderByWithRelationInputSchema } from '../inputTypeSchemas/SponsoredProgramOrderByWithRelationInputSchema'
import { SponsoredProgramWhereUniqueInputSchema } from '../inputTypeSchemas/SponsoredProgramWhereUniqueInputSchema'
import { SponsoredProgramScalarFieldEnumSchema } from '../inputTypeSchemas/SponsoredProgramScalarFieldEnumSchema'
import { SponsorArgsSchema } from "../outputTypeSchemas/SponsorArgsSchema"
import { SponsoredTestFindManyArgsSchema } from "../outputTypeSchemas/SponsoredTestFindManyArgsSchema"
import { SponsoredProgramCountOutputTypeArgsSchema } from "../outputTypeSchemas/SponsoredProgramCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SponsoredProgramSelectSchema: z.ZodType<Prisma.SponsoredProgramSelect> = z.object({
  id: z.boolean().optional(),
  sponsorId: z.boolean().optional(),
  therapeuticArea: z.boolean().optional(),
  programName: z.boolean().optional(),
  programUrl: z.boolean().optional(),
  programLabUrl: z.boolean().optional(),
  sponsoredTestingUrl: z.boolean().optional(),
  programEligibility: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sponsor: z.union([z.boolean(),z.lazy(() => SponsorArgsSchema)]).optional(),
  sponsoredTests: z.union([z.boolean(),z.lazy(() => SponsoredTestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SponsoredProgramCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SponsoredProgramFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SponsoredProgramFindFirstOrThrowArgs> = z.object({
  select: SponsoredProgramSelectSchema.optional(),
  include: z.lazy(() => SponsoredProgramIncludeSchema).optional(),
  where: SponsoredProgramWhereInputSchema.optional(), 
  orderBy: z.union([ SponsoredProgramOrderByWithRelationInputSchema.array(), SponsoredProgramOrderByWithRelationInputSchema ]).optional(),
  cursor: SponsoredProgramWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SponsoredProgramScalarFieldEnumSchema, SponsoredProgramScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default SponsoredProgramFindFirstOrThrowArgsSchema;
