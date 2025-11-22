import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentScalarWhereInputSchema } from './LabOrderSponsoredTestConsentScalarWhereInputSchema';
import { LabOrderSponsoredTestConsentUpdateManyMutationInputSchema } from './LabOrderSponsoredTestConsentUpdateManyMutationInputSchema';
import { LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutSponsoredTestInputSchema';

export const LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutSponsoredTestInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutSponsoredTestInput> = z.strictObject({
  where: z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateManyMutationInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutSponsoredTestInputSchema) ]),
});

export default LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutSponsoredTestInputSchema;
