import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestSelectSchema } from '../inputTypeSchemas/ProviderFavoriteTestSelectSchema';
import { ProviderFavoriteTestIncludeSchema } from '../inputTypeSchemas/ProviderFavoriteTestIncludeSchema';

export const ProviderFavoriteTestArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestDefaultArgs> = z.object({
  select: z.lazy(() => ProviderFavoriteTestSelectSchema).optional(),
  include: z.lazy(() => ProviderFavoriteTestIncludeSchema).optional(),
}).strict();

export default ProviderFavoriteTestArgsSchema;
