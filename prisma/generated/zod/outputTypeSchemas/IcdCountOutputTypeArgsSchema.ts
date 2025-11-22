import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdCountOutputTypeSelectSchema } from './IcdCountOutputTypeSelectSchema';

export const IcdCountOutputTypeArgsSchema: z.ZodType<Prisma.IcdCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IcdCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IcdCountOutputTypeSelectSchema;
