import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateWithoutLabOrderInputSchema } from './LabOrderFormCreateWithoutLabOrderInputSchema';
import { LabOrderFormUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderFormUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderFormCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderFormCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderFormCreateManyLabOrderInputEnvelopeSchema } from './LabOrderFormCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';

export const LabOrderFormUncheckedCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderFormUncheckedCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderFormUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderFormCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderFormCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderFormUncheckedCreateNestedManyWithoutLabOrderInputSchema;
