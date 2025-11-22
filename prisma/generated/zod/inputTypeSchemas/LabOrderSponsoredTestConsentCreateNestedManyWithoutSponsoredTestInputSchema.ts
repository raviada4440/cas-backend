import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema } from './LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';

export const LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema).array(), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema;
