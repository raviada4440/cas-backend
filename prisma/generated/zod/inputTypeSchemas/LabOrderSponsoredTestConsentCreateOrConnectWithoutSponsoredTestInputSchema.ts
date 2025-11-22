import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema';

export const LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema) ]),
});

export default LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema;
