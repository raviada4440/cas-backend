import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SponsoredTestCountOutputTypeSelectSchema: z.ZodType<Prisma.SponsoredTestCountOutputTypeSelect> = z.object({
  labOrderSponsoredTestConsents: z.boolean().optional(),
}).strict();

export default SponsoredTestCountOutputTypeSelectSchema;
