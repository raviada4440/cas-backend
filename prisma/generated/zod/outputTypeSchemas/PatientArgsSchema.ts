import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientSelectSchema } from '../inputTypeSchemas/PatientSelectSchema';
import { PatientIncludeSchema } from '../inputTypeSchemas/PatientIncludeSchema';

export const PatientArgsSchema: z.ZodType<Prisma.PatientDefaultArgs> = z.object({
  select: z.lazy(() => PatientSelectSchema).optional(),
  include: z.lazy(() => PatientIncludeSchema).optional(),
}).strict();

export default PatientArgsSchema;
