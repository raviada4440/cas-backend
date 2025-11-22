import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdCreateWithoutIcdInputSchema } from './LabOrderIcdCreateWithoutIcdInputSchema';
import { LabOrderIcdUncheckedCreateWithoutIcdInputSchema } from './LabOrderIcdUncheckedCreateWithoutIcdInputSchema';

export const LabOrderIcdCreateOrConnectWithoutIcdInputSchema: z.ZodType<Prisma.LabOrderIcdCreateOrConnectWithoutIcdInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutIcdInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutIcdInputSchema) ]),
});

export default LabOrderIcdCreateOrConnectWithoutIcdInputSchema;
