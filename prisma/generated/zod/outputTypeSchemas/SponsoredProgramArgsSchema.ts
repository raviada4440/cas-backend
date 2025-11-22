import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramSelectSchema } from '../inputTypeSchemas/SponsoredProgramSelectSchema';
import { SponsoredProgramIncludeSchema } from '../inputTypeSchemas/SponsoredProgramIncludeSchema';

export const SponsoredProgramArgsSchema: z.ZodType<Prisma.SponsoredProgramDefaultArgs> = z.object({
  select: z.lazy(() => SponsoredProgramSelectSchema).optional(),
  include: z.lazy(() => SponsoredProgramIncludeSchema).optional(),
}).strict();

export default SponsoredProgramArgsSchema;
