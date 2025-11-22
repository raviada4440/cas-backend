import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SponsoredProgramCountOutputTypeSelectSchema: z.ZodType<Prisma.SponsoredProgramCountOutputTypeSelect> = z.object({
  sponsoredTests: z.boolean().optional(),
}).strict();

export default SponsoredProgramCountOutputTypeSelectSchema;
