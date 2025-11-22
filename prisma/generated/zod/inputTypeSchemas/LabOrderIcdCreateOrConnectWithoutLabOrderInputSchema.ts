import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdWhereUniqueInputSchema } from './LabOrderIcdWhereUniqueInputSchema';
import { LabOrderIcdCreateWithoutLabOrderInputSchema } from './LabOrderIcdCreateWithoutLabOrderInputSchema';
import { LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderIcdWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderIcdCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderIcdCreateOrConnectWithoutLabOrderInputSchema;
