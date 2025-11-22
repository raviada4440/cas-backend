import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdSelectSchema } from '../inputTypeSchemas/IcdSelectSchema';
import { IcdIncludeSchema } from '../inputTypeSchemas/IcdIncludeSchema';

export const IcdArgsSchema: z.ZodType<Prisma.IcdDefaultArgs> = z.object({
  select: z.lazy(() => IcdSelectSchema).optional(),
  include: z.lazy(() => IcdIncludeSchema).optional(),
}).strict();

export default IcdArgsSchema;
