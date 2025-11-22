import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorSelectSchema } from '../inputTypeSchemas/SponsorSelectSchema';
import { SponsorIncludeSchema } from '../inputTypeSchemas/SponsorIncludeSchema';

export const SponsorArgsSchema: z.ZodType<Prisma.SponsorDefaultArgs> = z.object({
  select: z.lazy(() => SponsorSelectSchema).optional(),
  include: z.lazy(() => SponsorIncludeSchema).optional(),
}).strict();

export default SponsorArgsSchema;
