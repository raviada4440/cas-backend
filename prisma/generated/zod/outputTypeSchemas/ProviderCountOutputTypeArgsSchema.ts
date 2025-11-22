import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderCountOutputTypeSelectSchema } from './ProviderCountOutputTypeSelectSchema';

export const ProviderCountOutputTypeArgsSchema: z.ZodType<Prisma.ProviderCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProviderCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ProviderCountOutputTypeSelectSchema;
