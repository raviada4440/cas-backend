import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsorCountOutputTypeSelectSchema } from './SponsorCountOutputTypeSelectSchema';

export const SponsorCountOutputTypeArgsSchema: z.ZodType<Prisma.SponsorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SponsorCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SponsorCountOutputTypeSelectSchema;
