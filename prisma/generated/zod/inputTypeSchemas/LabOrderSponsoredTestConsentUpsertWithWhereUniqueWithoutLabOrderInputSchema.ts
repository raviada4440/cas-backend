import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentUpdateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUpdateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema;
