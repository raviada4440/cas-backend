import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ConsentAuditLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ConsentAuditLogOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ConsentAuditLogOrderByRelationAggregateInputSchema;
