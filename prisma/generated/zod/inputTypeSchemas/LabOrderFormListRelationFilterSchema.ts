import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereInputSchema } from './LabOrderFormWhereInputSchema';

export const LabOrderFormListRelationFilterSchema: z.ZodType<Prisma.LabOrderFormListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderFormWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderFormWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderFormWhereInputSchema).optional(),
});

export default LabOrderFormListRelationFilterSchema;
