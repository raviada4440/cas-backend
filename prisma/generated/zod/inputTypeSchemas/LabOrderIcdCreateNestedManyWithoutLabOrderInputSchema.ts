import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdCreateWithoutLabOrderInputSchema } from './LabOrderIcdCreateWithoutLabOrderInputSchema';
import { LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderIcdCreateManyLabOrderInputEnvelopeSchema } from './LabOrderIcdCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';

export const LabOrderIcdCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderIcdCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderIcdCreateNestedManyWithoutLabOrderInputSchema;
