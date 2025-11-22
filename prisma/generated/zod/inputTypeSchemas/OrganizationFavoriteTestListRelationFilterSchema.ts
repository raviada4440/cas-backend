import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereInputSchema } from './OrganizationFavoriteTestWhereInputSchema';

export const OrganizationFavoriteTestListRelationFilterSchema: z.ZodType<Prisma.OrganizationFavoriteTestListRelationFilter> = z.strictObject({
  every: z.lazy(() => OrganizationFavoriteTestWhereInputSchema).optional(),
  some: z.lazy(() => OrganizationFavoriteTestWhereInputSchema).optional(),
  none: z.lazy(() => OrganizationFavoriteTestWhereInputSchema).optional(),
});

export default OrganizationFavoriteTestListRelationFilterSchema;
