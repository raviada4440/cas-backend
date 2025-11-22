import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestCountOutputTypeSelectSchema } from './SponsoredTestCountOutputTypeSelectSchema';

export const SponsoredTestCountOutputTypeArgsSchema: z.ZodType<Prisma.SponsoredTestCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SponsoredTestCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SponsoredTestCountOutputTypeSelectSchema;
