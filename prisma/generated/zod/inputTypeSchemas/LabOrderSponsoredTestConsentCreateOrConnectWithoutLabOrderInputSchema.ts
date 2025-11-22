import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema;
