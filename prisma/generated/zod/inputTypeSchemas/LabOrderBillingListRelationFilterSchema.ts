import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingWhereInputSchema } from './LabOrderBillingWhereInputSchema';

export const LabOrderBillingListRelationFilterSchema: z.ZodType<Prisma.LabOrderBillingListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderBillingWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderBillingWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderBillingWhereInputSchema).optional(),
});

export default LabOrderBillingListRelationFilterSchema;
