import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentScalarWhereInputSchema } from './LabOrderSponsoredTestConsentScalarWhereInputSchema';
import { LabOrderSponsoredTestConsentUpdateManyMutationInputSchema } from './LabOrderSponsoredTestConsentUpdateManyMutationInputSchema';
import { LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateManyMutationInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutLabOrderInputSchema;
