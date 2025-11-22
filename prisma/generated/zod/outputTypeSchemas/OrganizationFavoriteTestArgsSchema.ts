import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestSelectSchema } from '../inputTypeSchemas/OrganizationFavoriteTestSelectSchema';
import { OrganizationFavoriteTestIncludeSchema } from '../inputTypeSchemas/OrganizationFavoriteTestIncludeSchema';

export const OrganizationFavoriteTestArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestDefaultArgs> = z.object({
  select: z.lazy(() => OrganizationFavoriteTestSelectSchema).optional(),
  include: z.lazy(() => OrganizationFavoriteTestIncludeSchema).optional(),
}).strict();

export default OrganizationFavoriteTestArgsSchema;
