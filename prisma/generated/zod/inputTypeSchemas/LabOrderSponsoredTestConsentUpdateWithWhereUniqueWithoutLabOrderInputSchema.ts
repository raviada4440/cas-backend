import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentUpdateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUpdateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema;
