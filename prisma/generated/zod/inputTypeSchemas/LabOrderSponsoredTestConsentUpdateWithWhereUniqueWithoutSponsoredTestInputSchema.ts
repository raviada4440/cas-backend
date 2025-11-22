import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentUpdateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUpdateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUncheckedUpdateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedUpdateWithoutSponsoredTestInputSchema';

export const LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutSponsoredTestInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutSponsoredTestInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedUpdateWithoutSponsoredTestInputSchema) ]),
});

export default LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutSponsoredTestInputSchema;
