import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusCreateWithoutLabOrderInputSchema } from './LabOrderStatusCreateWithoutLabOrderInputSchema';
import { LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderStatusCreateManyLabOrderInputEnvelopeSchema } from './LabOrderStatusCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderStatusWhereUniqueInputSchema } from './LabOrderStatusWhereUniqueInputSchema';

export const LabOrderStatusUncheckedCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderStatusUncheckedCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderStatusCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderStatusCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderStatusWhereUniqueInputSchema), z.lazy(() => LabOrderStatusWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderStatusUncheckedCreateNestedManyWithoutLabOrderInputSchema;
