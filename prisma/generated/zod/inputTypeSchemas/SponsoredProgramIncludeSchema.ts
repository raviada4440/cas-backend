import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorArgsSchema } from "../outputTypeSchemas/SponsorArgsSchema"
import { SponsoredTestFindManyArgsSchema } from "../outputTypeSchemas/SponsoredTestFindManyArgsSchema"
import { SponsoredProgramCountOutputTypeArgsSchema } from "../outputTypeSchemas/SponsoredProgramCountOutputTypeArgsSchema"

export const SponsoredProgramIncludeSchema: z.ZodType<Prisma.SponsoredProgramInclude> = z.object({
  sponsor: z.union([z.boolean(),z.lazy(() => SponsorArgsSchema)]).optional(),
  sponsoredTests: z.union([z.boolean(),z.lazy(() => SponsoredTestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SponsoredProgramCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default SponsoredProgramIncludeSchema;
