import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderListRelationFilterSchema: z.ZodType<Prisma.LabOrderListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderListRelationFilterSchema;
