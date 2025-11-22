import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderCountOutputTypeSelectSchema } from './LabOrderCountOutputTypeSelectSchema';

export const LabOrderCountOutputTypeArgsSchema: z.ZodType<Prisma.LabOrderCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LabOrderCountOutputTypeSelectSchema;
