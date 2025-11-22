import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestWhereInputSchema } from './LabOrderTestWhereInputSchema';

export const LabOrderTestListRelationFilterSchema: z.ZodType<Prisma.LabOrderTestListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderTestWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderTestWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderTestWhereInputSchema).optional(),
});

export default LabOrderTestListRelationFilterSchema;
