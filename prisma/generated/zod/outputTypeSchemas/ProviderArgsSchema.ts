import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderSelectSchema } from '../inputTypeSchemas/ProviderSelectSchema';
import { ProviderIncludeSchema } from '../inputTypeSchemas/ProviderIncludeSchema';

export const ProviderArgsSchema: z.ZodType<Prisma.ProviderDefaultArgs> = z.object({
  select: z.lazy(() => ProviderSelectSchema).optional(),
  include: z.lazy(() => ProviderIncludeSchema).optional(),
}).strict();

export default ProviderArgsSchema;
