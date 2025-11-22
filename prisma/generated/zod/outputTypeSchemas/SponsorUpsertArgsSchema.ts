import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorIncludeSchema } from '../inputTypeSchemas/SponsorIncludeSchema'
import { SponsorWhereUniqueInputSchema } from '../inputTypeSchemas/SponsorWhereUniqueInputSchema'
import { SponsorCreateInputSchema } from '../inputTypeSchemas/SponsorCreateInputSchema'
import { SponsorUncheckedCreateInputSchema } from '../inputTypeSchemas/SponsorUncheckedCreateInputSchema'
import { SponsorUpdateInputSchema } from '../inputTypeSchemas/SponsorUpdateInputSchema'
import { SponsorUncheckedUpdateInputSchema } from '../inputTypeSchemas/SponsorUncheckedUpdateInputSchema'
import { SponsoredProgramFindManyArgsSchema } from "../outputTypeSchemas/SponsoredProgramFindManyArgsSchema"
import { SponsorCountOutputTypeArgsSchema } from "../outputTypeSchemas/SponsorCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SponsorSelectSchema: z.ZodType<Prisma.SponsorSelect> = z.object({
  id: z.boolean().optional(),
  sponsorName: z.boolean().optional(),
  sponsorCode: z.boolean().optional(),
  sponsorWebsite: z.boolean().optional(),
  sponsorType: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zip: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sponsoredPrograms: z.union([z.boolean(),z.lazy(() => SponsoredProgramFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SponsorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SponsorUpsertArgsSchema: z.ZodType<Prisma.SponsorUpsertArgs> = z.object({
  select: SponsorSelectSchema.optional(),
  include: z.lazy(() => SponsorIncludeSchema).optional(),
  where: SponsorWhereUniqueInputSchema, 
  create: z.union([ SponsorCreateInputSchema, SponsorUncheckedCreateInputSchema ]),
  update: z.union([ SponsorUpdateInputSchema, SponsorUncheckedUpdateInputSchema ]),
}).strict();

export default SponsorUpsertArgsSchema;
