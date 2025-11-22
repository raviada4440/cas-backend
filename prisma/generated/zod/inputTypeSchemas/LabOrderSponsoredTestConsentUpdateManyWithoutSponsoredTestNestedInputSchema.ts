import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema } from './LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutSponsoredTestInputSchema';
import { LabOrderSponsoredTestConsentScalarWhereInputSchema } from './LabOrderSponsoredTestConsentScalarWhereInputSchema';

export const LabOrderSponsoredTestConsentUpdateManyWithoutSponsoredTestNestedInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpdateManyWithoutSponsoredTestNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema).array(), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutSponsoredTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutSponsoredTestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutSponsoredTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutSponsoredTestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutSponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutSponsoredTestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema), z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderSponsoredTestConsentUpdateManyWithoutSponsoredTestNestedInputSchema;
