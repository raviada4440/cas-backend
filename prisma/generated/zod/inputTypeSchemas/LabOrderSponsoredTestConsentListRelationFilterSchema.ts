import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentWhereInputSchema } from './LabOrderSponsoredTestConsentWhereInputSchema';

export const LabOrderSponsoredTestConsentListRelationFilterSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema).optional(),
});

export default LabOrderSponsoredTestConsentListRelationFilterSchema;
