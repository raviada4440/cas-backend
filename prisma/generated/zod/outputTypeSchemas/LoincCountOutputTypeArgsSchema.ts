import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincCountOutputTypeSelectSchema } from './LoincCountOutputTypeSelectSchema';

export const LoincCountOutputTypeArgsSchema: z.ZodType<Prisma.LoincCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LoincCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LoincCountOutputTypeSelectSchema;
