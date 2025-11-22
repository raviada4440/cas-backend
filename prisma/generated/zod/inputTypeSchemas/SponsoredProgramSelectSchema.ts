import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorArgsSchema } from "../outputTypeSchemas/SponsorArgsSchema"
import { SponsoredTestFindManyArgsSchema } from "../outputTypeSchemas/SponsoredTestFindManyArgsSchema"
import { SponsoredProgramCountOutputTypeArgsSchema } from "../outputTypeSchemas/SponsoredProgramCountOutputTypeArgsSchema"

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

export default SponsoredProgramSelectSchema;
