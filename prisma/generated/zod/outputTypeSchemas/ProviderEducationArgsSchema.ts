import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderEducationSelectSchema } from '../inputTypeSchemas/ProviderEducationSelectSchema';
import { ProviderEducationIncludeSchema } from '../inputTypeSchemas/ProviderEducationIncludeSchema';

export const ProviderEducationArgsSchema: z.ZodType<Prisma.ProviderEducationDefaultArgs> = z.object({
  select: z.lazy(() => ProviderEducationSelectSchema).optional(),
  include: z.lazy(() => ProviderEducationIncludeSchema).optional(),
}).strict();

export default ProviderEducationArgsSchema;
