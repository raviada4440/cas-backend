import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientCountOutputTypeSelectSchema } from './PatientCountOutputTypeSelectSchema';

export const PatientCountOutputTypeArgsSchema: z.ZodType<Prisma.PatientCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PatientCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PatientCountOutputTypeSelectSchema;
