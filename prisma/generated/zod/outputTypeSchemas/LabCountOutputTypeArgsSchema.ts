import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabCountOutputTypeSelectSchema } from './LabCountOutputTypeSelectSchema';

export const LabCountOutputTypeArgsSchema: z.ZodType<Prisma.LabCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LabCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LabCountOutputTypeSelectSchema;
