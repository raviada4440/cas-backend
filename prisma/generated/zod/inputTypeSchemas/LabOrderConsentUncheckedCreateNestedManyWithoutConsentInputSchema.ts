import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateWithoutConsentInputSchema } from './LabOrderConsentCreateWithoutConsentInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentInputSchema';
import { LabOrderConsentCreateOrConnectWithoutConsentInputSchema } from './LabOrderConsentCreateOrConnectWithoutConsentInputSchema';
import { LabOrderConsentCreateManyConsentInputEnvelopeSchema } from './LabOrderConsentCreateManyConsentInputEnvelopeSchema';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';

export const LabOrderConsentUncheckedCreateNestedManyWithoutConsentInputSchema: z.ZodType<Prisma.LabOrderConsentUncheckedCreateNestedManyWithoutConsentInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentCreateWithoutConsentInputSchema).array(), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentInputSchema), z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderConsentCreateManyConsentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderConsentUncheckedCreateNestedManyWithoutConsentInputSchema;
