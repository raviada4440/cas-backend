import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerCountOutputTypeSelectSchema } from './BiomarkerCountOutputTypeSelectSchema';

export const BiomarkerCountOutputTypeArgsSchema: z.ZodType<Prisma.BiomarkerCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BiomarkerCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BiomarkerCountOutputTypeSelectSchema;
