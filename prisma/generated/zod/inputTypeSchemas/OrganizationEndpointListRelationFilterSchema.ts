import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointWhereInputSchema } from './OrganizationEndpointWhereInputSchema';

export const OrganizationEndpointListRelationFilterSchema: z.ZodType<Prisma.OrganizationEndpointListRelationFilter> = z.strictObject({
  every: z.lazy(() => OrganizationEndpointWhereInputSchema).optional(),
  some: z.lazy(() => OrganizationEndpointWhereInputSchema).optional(),
  none: z.lazy(() => OrganizationEndpointWhereInputSchema).optional(),
});

export default OrganizationEndpointListRelationFilterSchema;
