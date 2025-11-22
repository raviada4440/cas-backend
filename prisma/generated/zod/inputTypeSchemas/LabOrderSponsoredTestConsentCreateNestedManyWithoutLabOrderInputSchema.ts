import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema } from './LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';

export const LabOrderSponsoredTestConsentCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderSponsoredTestConsentCreateNestedManyWithoutLabOrderInputSchema;
