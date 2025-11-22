import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentUpdateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUpdateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUncheckedUpdateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedUpdateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema';

export const LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutSponsoredTestInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutSponsoredTestInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedUpdateWithoutSponsoredTestInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema) ]),
});

export default LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutSponsoredTestInputSchema;
