import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredProgramCountOutputTypeSelectSchema } from './SponsoredProgramCountOutputTypeSelectSchema';

export const SponsoredProgramCountOutputTypeArgsSchema: z.ZodType<Prisma.SponsoredProgramCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SponsoredProgramCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SponsoredProgramCountOutputTypeSelectSchema;
