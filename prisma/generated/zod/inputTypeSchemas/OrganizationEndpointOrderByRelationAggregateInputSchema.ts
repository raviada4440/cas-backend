import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationEndpointOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrganizationEndpointOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationEndpointOrderByRelationAggregateInputSchema;
