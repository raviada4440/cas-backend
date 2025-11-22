import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestSelectSchema } from '../inputTypeSchemas/SponsoredTestSelectSchema';
import { SponsoredTestIncludeSchema } from '../inputTypeSchemas/SponsoredTestIncludeSchema';

export const SponsoredTestArgsSchema: z.ZodType<Prisma.SponsoredTestDefaultArgs> = z.object({
  select: z.lazy(() => SponsoredTestSelectSchema).optional(),
  include: z.lazy(() => SponsoredTestIncludeSchema).optional(),
}).strict();

export default SponsoredTestArgsSchema;
