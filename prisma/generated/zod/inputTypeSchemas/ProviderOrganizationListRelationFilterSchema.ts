import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationWhereInputSchema } from './ProviderOrganizationWhereInputSchema';

export const ProviderOrganizationListRelationFilterSchema: z.ZodType<Prisma.ProviderOrganizationListRelationFilter> = z.strictObject({
  every: z.lazy(() => ProviderOrganizationWhereInputSchema).optional(),
  some: z.lazy(() => ProviderOrganizationWhereInputSchema).optional(),
  none: z.lazy(() => ProviderOrganizationWhereInputSchema).optional(),
});

export default ProviderOrganizationListRelationFilterSchema;
