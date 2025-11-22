import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusWhereInputSchema } from './LabOrderStatusWhereInputSchema';

export const LabOrderStatusListRelationFilterSchema: z.ZodType<Prisma.LabOrderStatusListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderStatusWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderStatusWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderStatusWhereInputSchema).optional(),
});

export default LabOrderStatusListRelationFilterSchema;
