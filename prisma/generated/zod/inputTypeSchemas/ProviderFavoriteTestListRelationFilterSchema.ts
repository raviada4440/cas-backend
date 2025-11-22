import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereInputSchema } from './ProviderFavoriteTestWhereInputSchema';

export const ProviderFavoriteTestListRelationFilterSchema: z.ZodType<Prisma.ProviderFavoriteTestListRelationFilter> = z.strictObject({
  every: z.lazy(() => ProviderFavoriteTestWhereInputSchema).optional(),
  some: z.lazy(() => ProviderFavoriteTestWhereInputSchema).optional(),
  none: z.lazy(() => ProviderFavoriteTestWhereInputSchema).optional(),
});

export default ProviderFavoriteTestListRelationFilterSchema;
