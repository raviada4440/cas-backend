import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema } from './LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from './LabOrderSponsoredTestConsentWhereUniqueInputSchema';
import { LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentScalarWhereInputSchema } from './LabOrderSponsoredTestConsentScalarWhereInputSchema';

export const LabOrderSponsoredTestConsentUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema), z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderSponsoredTestConsentUpdateManyWithoutLabOrderNestedInputSchema;
