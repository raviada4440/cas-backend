import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramFindManyArgsSchema } from "../outputTypeSchemas/SponsoredProgramFindManyArgsSchema"
import { SponsorCountOutputTypeArgsSchema } from "../outputTypeSchemas/SponsorCountOutputTypeArgsSchema"

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

export default SponsorSelectSchema;
