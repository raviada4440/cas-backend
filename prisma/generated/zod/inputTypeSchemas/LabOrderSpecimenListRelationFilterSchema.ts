import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenWhereInputSchema } from './LabOrderSpecimenWhereInputSchema';

export const LabOrderSpecimenListRelationFilterSchema: z.ZodType<Prisma.LabOrderSpecimenListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderSpecimenWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderSpecimenWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderSpecimenWhereInputSchema).optional(),
});

export default LabOrderSpecimenListRelationFilterSchema;
