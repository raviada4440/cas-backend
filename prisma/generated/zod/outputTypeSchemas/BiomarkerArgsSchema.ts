import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerSelectSchema } from '../inputTypeSchemas/BiomarkerSelectSchema';
import { BiomarkerIncludeSchema } from '../inputTypeSchemas/BiomarkerIncludeSchema';

export const BiomarkerArgsSchema: z.ZodType<Prisma.BiomarkerDefaultArgs> = z.object({
  select: z.lazy(() => BiomarkerSelectSchema).optional(),
  include: z.lazy(() => BiomarkerIncludeSchema).optional(),
}).strict();

export default BiomarkerArgsSchema;
