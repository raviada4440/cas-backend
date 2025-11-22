import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdCreateWithoutIcdInputSchema } from './LabOrderIcdCreateWithoutIcdInputSchema';
import { LabOrderIcdUncheckedCreateWithoutIcdInputSchema } from './LabOrderIcdUncheckedCreateWithoutIcdInputSchema';
import { LabOrderIcdCreateOrConnectWithoutIcdInputSchema } from './LabOrderIcdCreateOrConnectWithoutIcdInputSchema';
import { LabOrderIcdCreateManyIcdInputEnvelopeSchema } from './LabOrderIcdCreateManyIcdInputEnvelopeSchema';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';

export const LabOrderIcdUncheckedCreateNestedManyWithoutIcdInputSchema: z.ZodType<Prisma.LabOrderIcdUncheckedCreateNestedManyWithoutIcdInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdCreateWithoutIcdInputSchema).array(), z.lazy(() => LabOrderIcdUncheckedCreateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutIcdInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderIcdCreateOrConnectWithoutIcdInputSchema), z.lazy(() => LabOrderIcdCreateOrConnectWithoutIcdInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderIcdCreateManyIcdInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderIcdWhereUniqueInputSchema), z.lazy(() => LabOrderIcdWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderIcdUncheckedCreateNestedManyWithoutIcdInputSchema;
