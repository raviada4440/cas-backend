import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SponsorCountOutputTypeSelectSchema: z.ZodType<Prisma.SponsorCountOutputTypeSelect> = z.object({
  sponsoredPrograms: z.boolean().optional(),
}).strict();

export default SponsorCountOutputTypeSelectSchema;
