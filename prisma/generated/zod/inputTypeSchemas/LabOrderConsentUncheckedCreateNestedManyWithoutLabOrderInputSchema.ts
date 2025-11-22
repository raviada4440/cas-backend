import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateWithoutLabOrderInputSchema } from './LabOrderConsentCreateWithoutLabOrderInputSchema';
import { LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderConsentCreateManyLabOrderInputEnvelopeSchema } from './LabOrderConsentCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';

export const LabOrderConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderConsentUncheckedCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderConsentCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema;
