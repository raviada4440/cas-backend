import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabSelectSchema } from '../inputTypeSchemas/LabSelectSchema';
import { LabIncludeSchema } from '../inputTypeSchemas/LabIncludeSchema';

export const LabArgsSchema: z.ZodType<Prisma.LabDefaultArgs> = z.object({
  select: z.lazy(() => LabSelectSchema).optional(),
  include: z.lazy(() => LabIncludeSchema).optional(),
}).strict();

export default LabArgsSchema;
