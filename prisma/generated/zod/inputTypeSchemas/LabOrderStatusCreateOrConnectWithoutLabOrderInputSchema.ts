import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusWhereUniqueInputSchema } from './LabOrderStatusWhereUniqueInputSchema';
import { LabOrderStatusCreateWithoutLabOrderInputSchema } from './LabOrderStatusCreateWithoutLabOrderInputSchema';
import { LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderStatusCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderStatusWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderStatusCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderStatusUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderStatusCreateOrConnectWithoutLabOrderInputSchema;
