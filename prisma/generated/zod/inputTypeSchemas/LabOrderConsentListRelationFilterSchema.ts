import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereInputSchema } from './LabOrderConsentWhereInputSchema';

export const LabOrderConsentListRelationFilterSchema: z.ZodType<Prisma.LabOrderConsentListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderConsentWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderConsentWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderConsentWhereInputSchema).optional(),
});

export default LabOrderConsentListRelationFilterSchema;
