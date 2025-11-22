import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderScalarRelationFilterSchema: z.ZodType<Prisma.LabOrderScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => LabOrderWhereInputSchema).optional(),
  isNot: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderScalarRelationFilterSchema;
