import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdWhereInputSchema } from './LabOrderIcdWhereInputSchema';

export const LabOrderIcdListRelationFilterSchema: z.ZodType<Prisma.LabOrderIcdListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderIcdWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderIcdWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderIcdWhereInputSchema).optional(),
});

export default LabOrderIcdListRelationFilterSchema;
