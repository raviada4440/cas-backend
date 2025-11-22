import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincSelectSchema } from '../inputTypeSchemas/LoincSelectSchema';
import { LoincIncludeSchema } from '../inputTypeSchemas/LoincIncludeSchema';

export const LoincArgsSchema: z.ZodType<Prisma.LoincDefaultArgs> = z.object({
  select: z.lazy(() => LoincSelectSchema).optional(),
  include: z.lazy(() => LoincIncludeSchema).optional(),
}).strict();

export default LoincArgsSchema;
